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

const Statistics = (props) => {

	const all = props.good + props.neutral + props.bad
	const average = (props.good - props.bad) / all
	const positive = props.good / all * 100

	return (
		<div>
			<div>good {props.good}</div>
			<div>neutral {props.neutral}</div>
			<div>bad {props.bad}</div>
			<div>all {all}</div>
			<div>average {average}</div>
			<div>positive {positive} %</div>
		</div>
	)
}

const App = () => {

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
			<Statistics good={good} setGood={setGood}
									neutral={neutral} setNeutral={setNeutral}
									bad={bad} setBad={setBad} />
    </div>
  )
}

export default App
