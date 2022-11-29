import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
