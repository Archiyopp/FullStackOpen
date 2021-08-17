import React, { useState } from 'react';
import { create } from '../services/persons';

export default function Form({ persons, setPersons }) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already on the phonebook`);
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    create(newPerson).then((returnedPerson) =>
      setPersons((p) => [...p, returnedPerson])
    );
    setNewName('');
  };
  return (
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
  );
}
