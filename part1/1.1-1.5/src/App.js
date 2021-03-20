/* **********************1.1********************** */
// import React from 'react'

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1> {props.course} </h1>
// 		</div>
// 	)
// }

// const Content = (props) => {
// 	return (
// 		<div>
// 			<p>{props.name1} {props.number1} </p>
// 			<p>{props.name2} {props.number2} </p>
// 			<p>{props.name3} {props.number3} </p>
// 		</div>
// 	)
// }

// const Total = (props) => {
// 	return (
// 		<div>
// 			<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
// 		</div>
// 	)
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
// 		<Header course={course} />
// 		<Content name1={part1} number1={exercises1} name2={part2} number2={exercises2} name3={part3} number3={exercises3}/>
// 		<Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
//     </div>
//   )
// }

// export default App

/* **********************1.2********************** */

// import React from 'react'

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1> {props.course} </h1>
// 		</div>
// 	)
// }

// const Part = (props) => {
// 	return (
// 		<div>
// 			<p>{props.name} {props.number} </p>
// 		</div>
// 	)
// }

// const Content = (props) => {
// 	return (
// 		<div>
// 			<Part name={props.name1} number={props.number1}/>
// 			<Part name={props.name2} number={props.number2}/>
// 			<Part name={props.name3} number={props.number3}/>
// 		</div>
// 	)
// }

// const Total = (props) => {
// 	return (
// 		<div>
// 			<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
// 		</div>
// 	)
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
// 		<Header course={course} />
// 		<Content name1={part1} number1={exercises1} name2={part2} number2={exercises2} name3={part3} number3={exercises3}/>
// 		<Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
//     </div>
//   )
// }

// export default App

/* **********************1.3********************** */

// import React from 'react'

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1> {props.course} </h1>
// 		</div>
// 	)
// }

// const Part = (props) => {
// 	return (
// 		<div>
// 			<p>{props.name} {props.number} </p>
// 		</div>
// 	)
// }

// const Content = (props) => {
// 	return (
// 		<div>
// 			<Part name={props.name1} number={props.number1}/>
// 			<Part name={props.name2} number={props.number2}/>
// 			<Part name={props.name3} number={props.number3}/>
// 		</div>
// 	)
// }

// const Total = (props) => {
// 	return (
// 		<div>
// 			<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
// 		</div>
// 	)
// }

// const App = () => {
// 	const course = 'Half Stack application development'
// 	const part1 = {
// 		name: 'Fundamentals of React',
// 		exercises: 10
// 	}
// 	const part2 = {
// 		name: 'Using props to pass data',
// 		exercises: 7
// 	}
// 	const part3 = {
// 		name: 'State of a component',
// 		exercises: 14
// 	}

//   return (
//     <div>
// 		<Header course={course} />
// 		<Content name1={part1.name} number1={part1.exercises} name2={part2.name} number2={part2.exercises} name3={part3.name} number3={part3.exercises}/>
// 		<Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
//     </div>
//   )
// }

// export default App

/* **********************1.4********************** */

// import React from 'react'

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1> {props.course} </h1>
// 		</div>
// 	)
// }

// const Part = (props) => {
// 	return (
// 		<div>
// 			<p>{props.name} {props.number} </p>
// 		</div>
// 	)
// }

// const Content = (props) => {
// 	return (
// 		<div>
// 				<Part name={props.parts[0].name} number={props.parts[0].exercises}/>
// 				<Part name={props.parts[1].name} number={props.parts[1].exercises}/>
// 				<Part name={props.parts[2].name} number={props.parts[2].exercises}/>
// 		</div>
// 	)
// }

// const Total = (props) => {
// 	return (
// 		<div>
// 			<p>Number of exercises {
// 				props.parts[0].exercises +
// 				props.parts[1].exercises +
// 				props.parts[2].exercises
// 				}</p>
// 		</div>
// 	)
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

// export default App

/* **********************1.5********************** */

import React from 'react'

const Header = (props) => {
	return (
		<div>
			<h1> {props.course} </h1>
		</div>
	)
}

const Part = (props) => {
	return (
		<div>
			<p>{props.name} {props.number} </p>
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
				<Part name={props.parts[0].name} number={props.parts[0].exercises}/>
				<Part name={props.parts[1].name} number={props.parts[1].exercises}/>
				<Part name={props.parts[2].name} number={props.parts[2].exercises}/>
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Number of exercises {
				props.parts[0].exercises +
				props.parts[1].exercises +
				props.parts[2].exercises
				}</p>
		</div>
	)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
