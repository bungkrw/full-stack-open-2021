import React, { useState } from 'react'

const Button = (props) => {
	return (
		<>
			<button onClick={() => props.function(props.state + 1)}>
				{props.name}
			</button>
		</>
	)
}

const Statistic = (props) => {

	if (props.text === "positive")
		return (
			<div>	{props.text} {props.value} % </div>
		)
	return (
		<div> {props.text} {props.value} </div>
	)
}

const Statistics = (props) => {

	const all = props.good + props.neutral + props.bad
	const average = (props.good - props.bad) / all
	const positive = props.good / all * 100

	if (all === 0) {
		return (
			<div>
				No feedback given
			</div>
		)
	}

	return (
		<div>
			<Statistic text="good" value={props.good}/>
			<Statistic text="neutral" value={props.neutral}/>
			<Statistic text="bad" value={props.bad}/>
			<Statistic text="all" value={all}/>
			<Statistic text="average" value={average}/>
			<Statistic text="positive" value={positive}/>
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
				<Button state={good} function={setGood} name={"good"}/>	<span> </span>
				<Button state={neutral} function={setNeutral} name={"neutral"}/> <span> </span>
				<Button state={bad} function={setBad} name={"bad"}/>

			<h1>statistics</h1>
				<Statistics good={good} setGood={setGood}
										neutral={neutral} setNeutral={setNeutral}
										bad={bad} setBad={setBad} />
    </div>
  )
}

export default App
