import { remove } from '../services/persons';
import Person from './person';

export default function FilteredPeople({ people, setPersons }) {
  const deletePerson = (id, name) => {
    const result = window.confirm(
      `Are you sure you want to delete this ${name}?`
    );
    if (result) {
      remove(id).catch((error) => console.log(error));
      setPersons((p) => p.filter((person) => id !== person.id));
    }
  };
  return (
    <ul>
      {people.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          number={person.number}
          deletePerson={() => deletePerson(person.id, person.name)}
        />
      ))}
    </ul>
  );
}
