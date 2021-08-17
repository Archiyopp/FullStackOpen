import React from 'react';

export default function Person({ number, name, deletePerson }) {
  return (
    <li>
      {name} - {number} <button onClick={deletePerson}>delete</button>
    </li>
  );
}
