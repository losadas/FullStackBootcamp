import Part from "./Part";

const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(element => {
            return <Part name={element.name} exercise={element.exercises} key={element.id}/>
        })}
      </div>
    );
  };

  export default Content