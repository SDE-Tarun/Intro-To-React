import React from 'react'

import Navbar from './components/Navbar'

import Footer from './components/Footer'

import Person from './components/Person'

const App = () => {

  const todos = [
    'Go to swimming',
    'Watch some webseries',
    'Buy Groceries',
    'Buy Groceries part 2'
  ]

  const data = [
    {name: 'Abhishek', age: '26', profession: 'SDE-1'},
    {name: 'Anurag', age: '30', profession: 'SDE-2'},
  ]

  return (
    <div>
      <Navbar />
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
      <h1>Hi there!!</h1>
      {data.map(data => <Person name={data.name} age={data.age} profession={data.profession} />)}
      <Footer />
    </div>
  )
}

export default App