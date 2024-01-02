import Person from "./Person";

const List = ({ person }) => {
  return (
    <div>
      {person.map((element) => {
        return <Person key={element.id} {...element}></Person>;
      })}
    </div>
  );
};

export default List;
