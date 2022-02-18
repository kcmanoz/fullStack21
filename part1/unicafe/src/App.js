import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <tr>
    <td>{props.text}{props.value}</td>
  </tr>
  )

const App = () => {
//save clicks of each button to its own state
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const totalPoints  = good + neutral + bad
const averagePoints = (good - bad)/totalPoints
const positivePercentage = (good/totalPoints) * 100 + ' %'

  return (
  <div>
    <h1>give feedback</h1>
    <Button handleClick={() => setGood(good + 1)} text='good'/> 
    <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/> 
    <Button handleClick={() => setBad(bad + 1)} text='bad'/> 
    <h1>statistics</h1>
    {totalPoints <= 0 &&
       <p>No feedback given.</p>
    }
    {totalPoints > 0 &&
     <table>
      <Statistics text='good ' value={good}/>
      <Statistics text='neutral ' value={neutral}/>
      <Statistics text='bad ' value={bad}/>
      <Statistics text='all ' value={totalPoints}/>
      <Statistics text='average ' value={averagePoints}/>
      <Statistics text='positive ' value={positivePercentage}/>
     </table>
    }
  </div>
  )
  }
export default App
