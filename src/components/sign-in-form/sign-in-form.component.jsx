import { useState } from 'react'; //tracks data

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonContainer } from './sign-in-form.styles';

const defaultFormFields = {
	email: '',
	password: '',
};

/*  destruct form to pickup state change */
const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	/* Resets form fields*/
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	/* Handles creation of user when Submit is pressed - Start*/
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};
	/* Handles creation of user when Submit is pressed - Start*/
	/* Updates form Display with input values - Start*/
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	/* Updates form Display with input values - Start*/

	/* Sign up form layout - Start*/
	return (
		<SignInContainer>
			<h2>Already have a Account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<ButtonContainer>
					<Button type="submit">Sign In</Button>
					<Button
						buttonType={BUTTON_TYPE_CLASSES.google}
						type="button"
						onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</ButtonContainer>
			</form>
		</SignInContainer>
	);

	/*Sign up form layout - End*/
};

export default SignInForm;
