import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic  = (props) => {
  return(
    <div>
      <tr>
        <td>{props.text}</td><td>{props.value}</td>
      </tr>
    </div>
  )
}

const Statistics = (props) => {
  if(props.total == 0)
  {
    return(
      "No feedback given"
    )
  }
  return(
    <table>
      <Statistic text="Good" value={props.good}/>
      <Statistic text="Neutral" value={props.neutral}/>
      <Statistic text="Bad" value={props.bad}/>
      <Statistic text="Total" value={props.total}/>
      <Statistic text="Average" value={props.average}/>
      <Statistic text="Percentage" value={props.percentage}/>
    </table>
  )

}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentage = good / total * 100
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
      <h1>Statistics</h1>
      <Statistics
      good = {good}
      neutral = {neutral}
      bad = {bad}
      total = {total}
      average = {average}
      percentage = {percentage}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)