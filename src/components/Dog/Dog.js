import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./style.css";

import dogAnimation from "../animations/dogAnimation.json";

// add const instance in  useEffect and return instance.destroy (line 22)
// this stops animation being rendered twice to page

const Dog = () => {
	const anime = useRef(null);
	useEffect(() => {
    const instance = 
		// Logic goes here
		lottie.loadAnimation({
			container: anime.current,
			renderer: "svg",
			loop: false,
			autoplay: true,
			animationData: dogAnimation,
		});
		// return () => lottie.stop();
    return () => instance.destroy();
	}, []);
	return (
		<div
			className='lottie-dog'
			style={{ height: 250, width: 500 }}
			ref={anime}
		></div>
	);
};

export default Dog;
