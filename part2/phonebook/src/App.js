import React, { useEffect, useState } from 'react';
import Filter from './components/filter';
import FilteredPeople from './components/filteredPeople';
import Form from './components/form';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data));
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <Form persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <FilteredPeople people={filteredPersons} />
    </div>
  );
};

export default App;
