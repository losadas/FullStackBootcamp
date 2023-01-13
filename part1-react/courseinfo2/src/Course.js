import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <>
      {course.map((element) => {
        return (
          <>
            <Header course={element.name} key={element.id} />
            <Content parts={element.parts} />
            <Total parts={element.parts} />
          </>
        );
      })}
    </>
  );
};

export default Course;
