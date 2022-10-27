
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import IMGa from './components/ImagenA';
import IMGb from './components/ImagenB';


function App() {
  const onHandlerClick = () => {
    console.log ('click')
  }
  return (
    <div className="App">
      <NavBar />
        <div className='MainCard'>
          <div className='Card' id='Card1'>
              <IMGa src = {require('./images/mininuke.jpg')} alt='mini nuke' />
              <Button onClick={onHandlerClick} text='>' />
            <div className='h3C'>
              <span className='h3I'>MINI NUKE</span>
              <IMGb src= {require('./images/mininukeair.jpg')} alt= 'mini nuke air' />
            </div>
          </div>
          <div className='Card' id='Card2'>
            <div className='h3C'>
              <span className='h3I'>ASSAULTRON</span>
              <IMGb src= {require('./images/mininukeair.jpg')} alt= 'mini nuke air' />
            </div>
            <Button onClick={onHandlerClick} text='<' />
            <IMGa src = {require('./images/Assaultron.png')} alt='assaultron' />
          </div>
          <div className='Card' id='Card1'>
            <IMGa src = {require('./images/powerarmor.jpg')} alt='power armors' />
            <Button onClick={onHandlerClick} text='>' />
            <div className='h3C'>
              <span className='h3I'>POWER ARMOR</span>
              <IMGb src= {require('./images/powerarmorcolors.jpg')} alt= 'power armor color' />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
