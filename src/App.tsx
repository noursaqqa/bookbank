import React from 'react';
//import './App.css';
// import Item from './ItemPage/item'
import Home from '../src/HomePage/Home'
import NavBar from './HomePage/NavBar'
const App: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <Home />
      {/* <Item /> */}
    </div>
  );
}

export default App;