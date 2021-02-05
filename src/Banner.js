import React, { useState, useEffect } from "react";
import requests from "./requests";
import axios from "./axios";
import "./Banner.css";
import myList from "./images/icons8-add-list-24.png";
import playButton from "./images/icons8-play-24.png";

function Banner() {
	// set a state for the banner, each time the page loads
	// a random movie is displayed at the header banner
	const [movie, setMovie] = useState([]);

	// run once when the banner component loads
	// it's a piece of code that runs based on a given condition
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	console.log(movie);

	// keep the description text short with the elipses
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">
						<img className="banner__buttonPlay" src={playButton} alt="" />
						Play
					</button>
					<button className="banner__button">
						<img className="banner__buttonList" src={myList} alt="" />
						My List
					</button>
				</div>

				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>

			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
