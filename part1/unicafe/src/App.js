import React, { Children, useState } from 'react';

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const StatisticsLine = ({ text, value, children }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value}
        {children}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text={'good'} value={good} />
          <StatisticsLine text={'neutral'} value={neutral} />
          <StatisticsLine text={'bad'} value={bad} />
          <StatisticsLine text={'all'} value={all} />
          <StatisticsLine text={'average'} value={all / 3} />
          <StatisticsLine
            text={'positive'}
            value={(good / all) * 100}
          >
            %
          </StatisticsLine>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => setGood((g) => g + 1);
  const handleNeutral = () => setNeutral((n) => n + 1);
  const handleBad = () => setBad((b) => b + 1);

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={'good'} handler={handleGood} />
      <Button text={'neutral'} handler={handleNeutral} />
      <Button text={'bad'} handler={handleBad} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
