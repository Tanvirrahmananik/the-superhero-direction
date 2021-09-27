// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
// import { useEffect } from 'react';

function App() {
  // useEffect(() =>{
  //  fetch('./data.JSON')
  //  .then(res => res.json())
  //  .then(data => console.log(data))
  // },[])
  return (
    <div> 
  <Header></Header>
  <Cards></Cards>
  
    </div>
  );
}


export default App;
