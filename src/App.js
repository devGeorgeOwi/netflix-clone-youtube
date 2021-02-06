import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
	const user = null;

	// use to manipulate the user state
	const dispatch = useDispatch();

	// listens to users login state (authentication state changes)
	useEffect(() => {
		// pass a clean up function on user Authenticated state listener
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				// Logged in
				console.log(userAuth);
				// push the user into the store(dispatch an object into the store)
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// Logged out
				dispatch(logout);
			}
		});

		return unsubscribe;
	}, []);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route exact path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
