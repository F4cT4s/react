
import './App.css';
import React from 'react';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting ={"Bienvenidos al shop"} />
    </div>
  );
}

export default App;
