import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood((g) => g + 1)}>good</button>
      <button onClick={() => setNeutral((n) => n + 1)}>
        neutral
      </button>
      <button onClick={() => setBad((b) => b + 1)}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {all / 3}</p>
      <p>positive {(good / all) * 100}</p>
    </div>
  );
};

export default App;
