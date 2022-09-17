export default function DogFactsReact({ dogFacts, setDogFacts }) {
	console.log("compo",dogFacts);

	return (
		<form>
			`<div className='fact-input'>
				<label htmlFor='number-of-facts'>
					Number of Dog Facts
				</label>
				<input
					type='number'
					value={dogFacts}
					min='1'
					max='10'
					onChange={(event) => setDogFacts(event.target.value)}
					id='number-of-facts'
				></input>
			</div>`
			<input type='submit' value='fetch Dog Facts'></input>
        
			{/* <button onClick={FetchDogFacts}>onclick console test</button> */}
		</form>
	);
}
