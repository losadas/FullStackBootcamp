import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Button = ({ action, nom }) => {
  return <button onClick={action}>{nom}</button>;
};



const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [poin, setPoin] = useState([0, 0, 0, 0, 0, 0])

  const handleOnClick = () => {
    const random = Math.floor(Math.random() * 6);
    setSelected(random);
  };

  const handleVote = () => {
    let newArr = [...poin]
    newArr[selected] = newArr[selected] + 1
    setPoin(newArr)
  }

  return (
    <>
      <div>{props.anecdotes[selected]}</div>
      <div>has {poin[selected]} votes</div>
      <Button action={handleVote} nom='Vote'/>
      <Button action={handleOnClick} nom='Next Anecdote' />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!.",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);

//soy un cambio
