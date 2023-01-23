import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import List from "./components/List";
import api from "./services/api";
import axios from "axios";

function App() {
  useEffect(() => {
    api.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [error, setNewError] = useState("");

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
      axios
        .get("http://localhost:3001/api/persons", {
          params: {
            name: newName,
          },
        })
        .then((response) => {
          const confirmed = window.confirm(
            `${newName} ya existe en la agenda, desea actualizar este número?`
          );
          if (confirmed) {
            const id = response.data[0].id;
            const puted = { name: newName, number: newNumber };
            setNewError('Se ha actualizado correctamente')
            setTimeout(() => {
              axios.put(`http://localhost:3001/api/persons/${id}`, puted).then(() => {
              api.getAll().then((response) => {
                setPersons(response.data);
                setNewName("");
                setNewNumber("");
                setNewError('')
              });
            });
            }, 2000)          
          }
        })
        .catch(() => {
          setNewError("Este contacto ya ha sido eliminado del servidor");
          setTimeout(() => {
            setNewError("");
            api.getAll().then((response) => {
              setPersons(response.data);
              setNewName("");
              setNewNumber("");
            });          
          }, 2000);
        });
    } else {
      const nuevo = { name: newName, number: newNumber };
      api.create(nuevo).then((response) => {
        setPersons([...persons, response.data]);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleErase = (e) => {
    const id = e.target.id;
    axios.get(`http://localhost:3001/api/persons/${id}`).then((response) => {
      const confirmed = window.confirm(
        `Desea eliminar a ${response.data.name}`
      );
      confirmed &&
        api.erase(id).then(() => {
          api.getAll().then((response) => {
            setPersons(response.data);
          });
        });
    });
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
      {error !== "" && <h2>{error}</h2>}
      <List newFilter={newFilter} persons={persons} handleErase={handleErase} />
    </>
  );
}

export default App;
