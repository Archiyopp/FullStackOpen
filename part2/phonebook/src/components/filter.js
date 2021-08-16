import React from 'react';

export default function Filter({ filter, setFilter }) {
  return (
    <p>
      Filter shown with{' '}
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </p>
  );
}
