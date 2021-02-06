import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
	// authentication
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = e => {
		e.preventDefault();

		// create a user account(email & password) when the sign up button is clicked
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then(authUser => {
				console.log(authUser);
			})
			.catch(error => {
				alert(error.message);
			});
	};

	const signIn = e => {
		e.preventDefault();

		// check if user is signed in
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then(authUser => {
				console.log(authUser);
			})
			.catch(error => alert(error.message));
	};

	return (
		<div className="signupScreen">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} placeholder="Email" type="email" />
				<input ref={passwordRef} placeholder="Password" type="password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>

				<h4>
					<span className="signupScreen__gray">New to Netflix? </span>
					<span className="signupScreen__link" onClick={register}>
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignupScreen;
