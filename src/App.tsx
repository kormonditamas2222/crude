import { useState } from 'react'
import './App.css'
import { KezdolapEsModerator } from './components/Kezdolap';
import { Csokoladek } from './data/Csokoladek';

function App() {
  const [oldal, setOldal] = useState("kezdőlap");
  const [csokoladek, setCsokoladek] = useState(Csokoladek);
  switch (oldal) {
    case "kezdőlap": return (
      <KezdolapEsModerator oldal={oldal} changeOldal={setOldal} csokik={csokoladek} setCsokik={setCsokoladek}/>
    )
    case "admin": return (
      <></>
    )
    case "moderátor": return (
      <KezdolapEsModerator oldal={oldal} changeOldal={setOldal} csokik={csokoladek} setCsokik={setCsokoladek}/>
    )
    default: console.error("Oldalváltási hiba"); break;
  }
}

export default App