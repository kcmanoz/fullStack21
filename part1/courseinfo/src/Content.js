import React from 'react'


const Content = props => {
  return (
    <div>
      {props.parts.map(data => (
        <p key={data.name}> Name: {data.name}, Exercises: {data.exercises}</p>
      ))}
    </div>
  )
};

export default Content