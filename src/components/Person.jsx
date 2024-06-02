import React from 'react'

const Person = ({name, age, profession}) => {
  return (
    <div style={{border: '2px solid black'}}>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Profession: {profession}</p>
    </div>
  )
}

export default Person