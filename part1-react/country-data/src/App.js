import { Fragment, useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const [data, setData] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState(0);

  const datafilter = data.filter((element) => {
    return element.name.common.toLowerCase().includes(newFilter.toLowerCase());
  });

  const handle = (e) => {
    setNewFilter(e.target.value);
    setIsClicked(false);
  };

  const show = datafilter.length < 11 && datafilter.length > 1;

  const handleClick = (e) => {
    setIsClicked(true);
    setPosition(e.target.id);
  };

  const lang = () => {
    return Object.values(datafilter[position].languages);
  };

  return (
    <>
      <label>Find countries</label>
      <input type="text" onChange={handle} value={newFilter} />
      <br />
      {newFilter === "" && <p>Type to search</p>}
      {show &&
        datafilter.map((element, index) => {
          return (
            <Fragment key={element.name.common}>
              <label>{element.name.common}</label>
              <button onClick={handleClick} id={index}>
                Show
              </button>
              <br />
            </Fragment>
          );
        })}
      {isClicked && (
        <>
          <h2>{datafilter[position].name.common}</h2>
          <p>Capital: {datafilter[position].capital}</p>
          <p>Population: {datafilter[position].population}</p>
          <h3>Languages</h3>
          <ul>
            {lang().map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
          <img src={`${datafilter[position].flags.png}`} alt="img flag" />
        </>
      )}
      {datafilter.length > 10 && newFilter !== "" && (
        <p>Too many matches, specify another filter</p>
      )}
      {datafilter.length === 1 && (
        <>
          <h2>{datafilter[0].name.common}</h2>
          <p>Capital: {datafilter[0].capital}</p>
          <p>Population: {datafilter[0].population}</p>
          <h3>Languages</h3>
          <ul>
            {lang().map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
          <img src={`${datafilter[0].flags.png}`} alt="img flag" />
        </>
      )}
    </>
  );
}

export default App;
