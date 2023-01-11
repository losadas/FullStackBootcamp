import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Button = ({ textButton, action }) => {
  return <button onClick={action}>{textButton}</button>;
};

const Statistics = ({ nombre, num }) => {
  return (
    <h2>
      {nombre} {num}
    </h2>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1)
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  };

  const handleBad = () => {
    setBad(bad + 1)
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button action={handleGood} textButton="Good" />
      <Button action={handleNeutral} textButton="Neutral" />
      <Button action={handleBad} textButton="Bad" />
      <h1>Statistics</h1>
      <Statistics nombre="Good" num={good} />
      <Statistics nombre="Neutral" num={neutral} />
      <Statistics nombre="Bad" num={bad} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
