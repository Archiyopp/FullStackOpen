import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already on the phonebook`);
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName('');
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h2>Phonebook</h2>

      <p>
        Filter shown with{' '}
        <input
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </p>
      <h2>Add a new</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          name:{' '}
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          number:{' '}
          <input
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
