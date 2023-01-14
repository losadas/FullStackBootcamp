const Filter = ({ handle, newFilter }) => {
  return (
    <>
      <h2>Phonebook</h2>
      <label>Filter shown with</label>
      <input type="text" onChange={handle} value={newFilter} />
    </>
  );
};

export default Filter;
