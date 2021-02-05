import React, { useEffect, useState } from "react";
import "./Nav.css";
import avatar from "./images/icons8-female-profile-48.png";

function Nav() {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		// display the dark navbar if scrolled
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img
					className="nav__logo"
					src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
					alt="Netflix Logo"
				/>
				<ul className="nav__menu">
					<li>Netflix Originals</li>
					<li>My List</li>
					<li>My Plan</li>
					<li>Kids</li>
				</ul>
				<img className="nav__avatar" src={avatar} alt="" />
			</div>
		</div>
	);
}

export default Nav;
