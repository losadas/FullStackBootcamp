const List = ({ newFilter, persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {newFilter === ""
        ? persons.map((element) => {
            return (
              <p key={element.name}>
                {element.name} {element.number}
              </p>
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
                <p key={element.name}>
                  {element.name} {element.number}
                </p>
              );
            })}
    </>
  );
};

export default List;
