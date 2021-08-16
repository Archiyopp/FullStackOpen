import React from 'react';

export default function Person({ number, name }) {
  return (
    <li>
      {name} - {number}
    </li>
  );
}
