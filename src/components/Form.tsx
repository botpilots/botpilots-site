import React from 'react';

interface FormProps {
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = (props) => {

	const submitButtonLabel = "Send Mail";

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
			.then(response => {
				// Handle HTTP errors
				if (!response.ok) {
					if (response.status === 429) {
						createBtnBehaviour(submitButton, 'Too many requests', 'background-color: red;', true, 2000);
					} else {
						createBtnBehaviour(submitButton, 'Server error', 'background-color: red;', true, 2000);
					}
				}
				// Handle successful response
				else {
					createBtnBehaviour(submitButton, 'Mail delivered - we get back to you shortly!', 'background-color: green;', false, 2000);
				}
			})
			// Handle network errors
			.catch((error) => {
				console.error(error);
				createBtnBehaviour(submitButton, 'Network error', 'background-color: red;', true, 2000);
			});
	};

	/**
	 * Updates the behavior of a submit button by changing its appearance and optionally hiding the form (e.g. at success).
	 *
	 * @param button - The submit button element to be modified.
	 * @param msg - The message to display on the button.
	 * @param color - New styles indicating status.
	 * @param showForm - A boolean indicating whether to show or hide the form.
	 * @param ms - The duration in milliseconds before resetting the button to its original state.
	 * @param resetLabel - The label to reset the button to. Default is 'Submit'.
	 */
	const createBtnBehaviour = (button: HTMLButtonElement, msg: string, styles: string, showForm: boolean, ms: number) => {

		const orgStyles = button.getAttribute('style') || "";

		// Modify style and text
		button.setAttribute('style', orgStyles + styles);
		button.textContent = msg;

		// Reset button to original appearance after some time
		setTimeout(() => {
			button.setAttribute('style', orgStyles);
			button.disabled = false;
			button.textContent = submitButtonLabel;
		}, ms);

		// Hide the form after some more time
		if (!showForm) {
			setTimeout(() => props.setShowForm(showForm), ms + 100);
		}
	};

	return (
		<>
			{(
				<div className="h-full flex flex-col bg-slate-900 border-slate-700 py-6 px-8 rounded border-1">
					<h2 className="text-3xl font-bold text-center">Hit us up</h2>
					<form onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-evenly gap-4">
						<div className="flex flex-col justify-between gap-2">
							<label htmlFor="email" className="text-left">
								Email (not stored or shared):
							</label>
							<input
								type="email"
								id="sender"
								required
								className="border border-gray-300 p-2 rounded"
							/>
						</div>
						<div className="flex flex-col justify-between gap-2">
							<label htmlFor="subject" className="text-left">
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
						<div className="flex-1 flex flex-col justify-between gap-2">
							<label htmlFor="body" className="text-left">
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
								style={{ transition: 'background-color 0.3s', width: '100%' }}
							>
								{submitButtonLabel}
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};





export default Form;