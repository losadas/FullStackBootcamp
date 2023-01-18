import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import List from "./components/List";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/persons").then((response) => {
      setPersons(response.data)
    });
  }, []);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleOnChange1 = (e) => {
    setNewName(e.target.value);
  };

  const handleOnChange2 = (e) => {
    setNewNumber(e.target.value);
  };

  const handleOnChange3 = (e) => {
    setNewFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const exist = persons.some((e) => e.name === newName);
    if (exist) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      e.target = <input type="text" value=""></input>;
    } else {
      const nuevo = { name: newName, number: newNumber };
      setPersons([...persons, nuevo]);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <>
      <Filter handle={handleOnChange3} newFilter={newFilter} />
      <Form
        submit={handleSubmit}
        handle1={handleOnChange1}
        handle2={handleOnChange2}
        newName={newName}
        newNumber={newNumber}
      />
      <List newFilter={newFilter} persons={persons} />
    </>
  );
}

export default App;
