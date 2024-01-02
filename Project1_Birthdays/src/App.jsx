import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [person, setPerson] = useState(data);

  const handleClearlist = () => {
    setPerson([]);
  };

  return (
    <main>
      <section className="container">
        <h2>Birthday Reminder - Starter</h2>
        <h3>Number of birth: {person.length}</h3>
        <List person={person}></List>
        <button className="btn btn-block" onClick={handleClearlist}>
          Clear the list
        </button>
      </section>
    </main>
  );
};
export default App;
