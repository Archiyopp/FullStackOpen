import React, { useEffect, useState } from 'react';
import Filter from './components/filter';
import FilteredPeople from './components/filteredPeople';
import Form from './components/form';
import Notification from './components/notification';
import { getAll } from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getAll().then((data) => setPersons(data));
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <Notification message={successMessage} isSuccess={true} />
      <Notification message={errorMessage} isSuccess={false} />
      <h2>Add a new</h2>
      <Form
        persons={persons}
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <h2>Numbers</h2>
      <FilteredPeople
        people={filteredPersons}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
