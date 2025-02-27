# CLAUDE.md - BotPilots Website Project Guide

## Commands
- Build: `npm run build` - Compiles TypeScript and builds with Vite
- Dev: `npm run dev` - Runs TypeScript compiler and starts Vite dev server
- Lint: `npm run lint` - Runs ESLint on the codebase
- Preview: `npm run preview` - Previews the built application
- Test: `npm run test` - Compiles TypeScript and runs tests

## Code Style Guidelines
- Use functional React components with TypeScript interfaces for props
- Follow strict TypeScript configuration with explicit typing
- Use Tailwind CSS for styling components
- Imports order: React → external libraries → internal components → styles
- Naming: PascalCase for components, camelCase for functions/variables
- Error handling: Use try/catch blocks with specific error messages
- State management: Use React hooks with proper dependency arrays
- Document complex functions with JSDoc comments
- Maximum line length: 100 characters
- Use async/await for asynchronous operations
- Prefer destructuring for props and state
- Use optional chaining (?.) and nullish coalescing (??) for safe access

## File Structure
- `/src/components` - React components
- `/src/assets` - Static assets (images, SVGs)
- `/src/data` - Data files (JSON)
- `/src/utils` - Utility functions