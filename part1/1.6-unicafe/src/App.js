import React, { useState } from 'react'

const Button = (props) => {
	return (
		<div>
			<button onClick={() => props.function1(props.state1 + 1)}>
				{props.name1}
			</button>
			<span> </span>
			<button onClick={() => props.function2(props.state2 + 1)}>
				{props.name2}
			</button>
			<span> </span>
			<button onClick={() => props.function3(props.state3 + 1)}>
				{props.name3}
			</button>
		</div>
	)
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
			<h1>give feedback</h1>
			<Button state1={good} function1={setGood} name1={"good"}
							state2={neutral} function2={setNeutral} name2={"neutral"}
							state3={bad} function3={setBad} name3={"bad"}	/>
			<h1>statistics</h1>
				<div>good {good}</div>
				<div>neutral {neutral}</div>
				<div>bad {bad}</div>
    </div>
  )
}

export default App
