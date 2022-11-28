import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer />
      <Item/>
    </div>
  );
}

export default App;
