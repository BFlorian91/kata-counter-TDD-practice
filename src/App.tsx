import React from 'react'
import './App.css'
import Counter from './components/counter/Counter'

function App(): JSX.Element {
  return (
    <main className="App">
      <Counter initialValue={0} />
    </main>
  )
}

export default App
