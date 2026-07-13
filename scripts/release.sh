#!/usr/bin/env bash
set -euo pipefail

usage() {
	cat <<'EOF'
Usage:
  ./scripts/release.sh [patch|minor|major|tag]

  patch|minor|major  Bump package.json on master, commit, and push.
                     GitHub Actions creates the tag and release on merge.
  tag                Push v<package.json version> (fallback if CI missed a release).

Recommended flow:
  1. Bump version in your PR (or run patch|minor|major on master).
  2. Merge to master.
  3. CI reads package.json and creates vX.Y.Z + GitHub release automatically.

Do not push release tags from feature branches before merge — that publishes
from a commit that is not on master yet.
EOF
}

get_version() {
	node -p "require('./package.json').version"
}

ensure_master_clean() {
	local branch
	branch=$(git rev-parse --abbrev-ref HEAD)
	if [[ "$branch" != "master" ]]; then
		echo "Error: must be on master (currently on $branch)." >&2
		exit 1
	fi
	if [[ -n "$(git status --porcelain)" ]]; then
		echo "Error: working tree must be clean." >&2
		exit 1
	fi
}

tag_exists() {
	local tag="v$(get_version)"
	git rev-parse "$tag" >/dev/null 2>&1 \
		|| git ls-remote --exit-code --tags origin "$tag" >/dev/null 2>&1
}

bump_and_push() {
	local bump="$1"
	ensure_master_clean
	npm version "$bump" --no-git-tag-version
	npm install
	local version
	version=$(get_version)
	git add package.json package-lock.json
	git commit -m "Release v${version}."
	git push origin master
	echo "Pushed master with version ${version}."
	echo "GitHub Actions will tag v${version} and create the release."
}

push_tag_only() {
	ensure_master_clean
	local version tag
	version=$(get_version)
	tag="v${version}"
	if tag_exists; then
		echo "Tag ${tag} already exists locally or on origin."
		exit 1
	fi
	git tag "$tag"
	git push origin "$tag"
	echo "Pushed ${tag}. GitHub Actions will create the release."
}

main() {
	local mode="${1:-}"
	case "$mode" in
		patch|minor|major) bump_and_push "$mode" ;;
		tag) push_tag_only ;;
		-h|--help|help) usage ;;
		'')
			echo "Error: missing command." >&2
			usage
			exit 1
			;;
		*)
			echo "Error: unknown command '$mode'." >&2
			usage
			exit 1
			;;
	esac
}

main "$@"
