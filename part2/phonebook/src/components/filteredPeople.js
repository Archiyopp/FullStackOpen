import Person from './person';

export default function FilteredPeople({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          number={person.number}
        />
      ))}
    </ul>
  );
}
