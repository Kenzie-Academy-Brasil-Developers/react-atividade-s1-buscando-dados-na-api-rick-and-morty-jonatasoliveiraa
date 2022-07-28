import { useEffect, useState } from 'react';
import Characters from "./components/Characters"
import './App.css';
import CharCard from './components/CharCard';

function App() {

  const [charactersList,setCharactersList] = useState([])

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .then(res => setCharactersList(res.results))
    .catch(err => console.log(err))
  },[])


  return (
    <div className="App">
      <header className="App-header">
     <Characters charactersList={charactersList}/>
      </header>
    </div>
  );
}

export default App;
