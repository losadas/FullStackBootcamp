import { Fragment } from "react";

const List = ({ newFilter, persons, handleErase}) => {
  return (
    <>
      <h2>Numbers</h2>
      {newFilter === ""
        ? persons.map((element) => {
            return (
              <Fragment key={element.name}>
                <p key={element.name}>
                  {element.name} {element.number}
                </p>
                <button id={element.id} onClick={handleErase}>Delete</button>
              </Fragment>
            );
          })
        : persons
            .filter((element) => {
              return element.name
                .toLowerCase()
                .includes(newFilter.toLowerCase());
            })
            .map((element) => {
              return (
                <Fragment key={element.name}>
                <p key={element.name}>
                  {element.name} {element.number}
                </p>
                <button id={element.id} onClick={handleErase}>Delete</button>
                </Fragment>
              );
            })}
    </>
  );
};

export default List;
