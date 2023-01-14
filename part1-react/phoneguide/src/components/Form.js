const Form = ({ submit, handle1, handle2, newName, newNumber }) => {
  return (
    <>
      <h2>Add a New</h2>
      <form onSubmit={submit}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={handle1} value={newName} />
          <br />
          <label>Number:</label>
          <input type="number" onChange={handle2} value={newNumber} />
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
