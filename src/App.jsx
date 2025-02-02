import { PersonInfo } from "./components/PersonInfo";
import { Form } from "./components/Form";
import { useState } from "react";
import "./app.css";

const initialPeople = [
  {
    name: "Filip",
    tel: 321312123,
    city: "Kraków",
  },
  {
    name: "Marek",
    tel: 765765657,
    city: "Kraków",
  },
  {
    name: "Jarek",
    tel: 1235432545,
    city: "Wawa",
  },
  {
    name: "Piotrek",
    tel: 986744545,
  },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);

  const handleShowFormClick = () => setIsFormShown(true);

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);
  };

  const removePerson = (tel) => {
    setPeople(people.filter((person) => person.tel !== tel));
  };

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={handleShowFormClick}>Dodaj</button>
      )}
      <ul>
        {people.map((person) => (
          <PersonInfo
            key={person.tel}
            name={person.name}
            tel={person.tel}
            city={person.city}
            onRemove={removePerson}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
