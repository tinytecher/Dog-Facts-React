import React, { useState } from "react";
import "./App.css";
import { dogData } from "../../dogData.js";
// import { Player } from '@lottiefiles/react-lottie-player'
import Dog from "../Dog/Dog";



function App() {
	// const [dogFacts, setDogFacts] = useState(dogData);
	// console.log(dogFacts)
	const [dogFact, setDogFact] = useState("");
  const [isClicked, setIsClicked] = useState(false);

function handleClick() {
  setIsClicked(!isClicked)
 
  console.log("working")
  setDogFact(dogData[Math.floor(Math.random()*dogData.length)])
  
}



	return (
		<div className='app'>
			<h1 className="app-header">Did You Know?</h1>
      <p className="app-p">{dogFact.fact}</p>
      <button className="app-button" onClick={handleClick}>
      Click Me
      </button>
      {isClicked && <Dog/>}
      {!isClicked && <Dog/>}
      
      
      
		</div>
	);
}

export default App;


// <button 
//   onClick={() => setDogFact(dogData[Math.floor(Math.random()*dogData.length)])}>
//   Click me
// </button> 

// show big animation with play / pause / stop etc option
      // <Player 
      // src="https://assets6.lottiefiles.com/packages/lf20_dxebb1lw.json" 
      // alt="dog" 
      // className="player" loop autoplay 
      // >
      //   {/* <Controls
      //   visible={true}
      //   buttons={["play"]}
      //   >
      //   </Controls> */}
      //   <Dog/>
      // </Player>