const Total = ({ parts }) => {
  const total = parts.reduce((a, b) => {
    return a + b.exercises;
  }, 0);
  return (
    <>
      <strong>
        <p>Total of Exercises {total}</p>
      </strong>
    </>
  );
};
export default Total;
