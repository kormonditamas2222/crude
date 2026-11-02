import { useState } from 'react'
import './App.css'
import { Kezdolap } from './components/Kezdolap';
import { Csokoladek } from './data/Csokoladek';

function App() {
  const [oldal, setOldal] = useState("kezdőlap");
  if (oldal == "kezdőlap") {
    return (
      <Kezdolap oldal={oldal} changeOldal={setOldal} csokik={Csokoladek}/>
    )
  }
  else if (oldal == "admin") {
    return (
      <></>
    )

  }
  else {
    return <></>
  }
}

export default App