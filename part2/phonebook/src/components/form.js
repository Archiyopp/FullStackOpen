import React, { useState } from 'react';
import { create, update } from '../services/persons';

export default function Form({ persons, setPersons }) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const oldPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (oldPerson) {
      const result = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with the new one?`
      );
      if (result) {
        update(oldPerson.id, {
          name: newName,
          number: newNumber,
        }).then((returnedPerson) => {
          setPersons((people) =>
            people.map((person) =>
              person.id !== oldPerson.id ? person : returnedPerson
            )
          );
        });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      create(newPerson).then((returnedPerson) =>
        setPersons((p) => [...p, returnedPerson])
      );
    }
    setNewName('');
    setNewNumber('');
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
