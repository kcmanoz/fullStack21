import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];
  const ex1 = parts[0].exercises
  const ex2 = parts[1].exercises
  const ex3 = parts[2].exercises
  const total = ex1 + ex2 + ex3

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};
export default App