import React from 'react';

interface FormProps {
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = (props) => {

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		// Handle form submission logic here
		// Make a POST request to the server of a particular endpoinr.

		// Change text on submitButton to "Sending..."
		const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
		submitButton.textContent = 'Sending...';
		submitButton.disabled = true;

		const requestBody = {
			sender: form.sender.value,
			subject: form.subject.value,
			body: form.body.value,
		};

		fetch(`https://ogiuf6ebhj.execute-api.eu-west-1.amazonaws.com/Prod/send/`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => {
				console.log(response);
				submitButton.textContent = 'Success!';
				submitButton.style.backgroundColor = 'green';

				setTimeout(() => {
					props.setShowForm(false); // Hide the form
				}, 500);

				resetSubmitButton(submitButton);

				return response.json();
			})
			.catch((error) => {
				// if too many requests
				if (error.status === 429) {
					console.error(error);
					submitButton.textContent = 'Too many requests, try again later.';
					submitButton.style.backgroundColor = 'red';

					resetSubmitButton(submitButton);
				} else {
					console.error(error);
					submitButton.textContent = 'Hm...failed to send';
					submitButton.style.backgroundColor = 'red';
					resetSubmitButton(submitButton);
				}
				submitButton.disabled = false;
			});
	};

	return (
		<>
			{(
				<div className="h-full inset-0 flex items-center justify-center text-[#b9d5ff] bg-slate-900 border-b-0 border-slate-700 py-6 px-8 rounded border-1">
					<form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 h-full">
						<div className="flex flex-col">
							<label htmlFor="email" className="text-left my-3">
								Email:
							</label>
							<input
								type="email"
								id="sender"
								required
								className="border border-gray-300 p-2 rounded"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="subject" className="text-left my-3">
								Subject:
							</label>
							<input
								autoComplete='off'
								type="text"
								id="subject"
								required
								className="border border-gray-300 p-2 rounded"
							/>
						</div>
						<div className="flex flex-col h-full">
							<label htmlFor="body" className="text-left my-3">
								Body:
							</label>
							<textarea
								id="body"
								required
								className="border border-gray-300 p-2 rounded h-full"
							/>
						</div>
						<div className="flex justify-end">
							<button
								id="submitButton"
								type="submit"
								className={`px-4 py-2 rounded text-white transition-colors`}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

const resetSubmitButton = (submitButton: HTMLButtonElement) => {
	setTimeout(() => {
		submitButton.textContent = 'Submit';
		submitButton.style.backgroundColor = '';
		submitButton.disabled = false;
	}, 2000);
};

export default Form;