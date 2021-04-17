import React, { useState } from 'react'

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const App = () => {

	const points = { 0: 1, 1: 3, 2: 4, 3: 2 }
	const copy = { ...points }
	copy[2] += 1
	console.log(copy)

	const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  	const [selected, setSelected] = useState(0)
	const [vote, setVoted] = useState(0)

	const max = 6
	const handleAnecdoteClick = () => setSelected(selected + 1)
	const handleVoteClick = () => setVoted(vote + 1)
	let randomInt = getRandomInt(max)

  return (
    <div>
      {anecdotes[randomInt]}
			<div>has {vote} votes</div>
			<div>
				<button onClick={handleVoteClick}>vote</button><span> </span>
				<button onClick={handleAnecdoteClick}>next anecdote</button>
			</div>
    </div>
  )
}

export default App
