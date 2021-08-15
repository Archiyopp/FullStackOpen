import React from 'react';

export function Header({ course }) {
  return <h1>{course}</h1>;
}

export function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}

export function Content({ parts }) {
  const [part1, part2, part3] = parts;
  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  );
}

export function Total({ parts }) {
  const exercises = parts.map((item) => item.exercises);
  const [exercises1, exercises2, exercises3] = exercises;
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  );
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
