import { useState } from 'react'

import Form from './components/Form'
import Result from './components/Result'

function App() {

  const [results, setResults] = useState([])

  return (
    <div className="App container mt-3">
      <h1 style={{textAlign: "center"}}>Recipe Search</h1>
      <Form setResults={setResults}/>
      { results.map((recipe, index) => <Result key={index} recipe={recipe.recipe} id={index}/>) }
    </div>
  )
}

export default App
