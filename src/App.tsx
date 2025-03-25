import React from 'react';
import './App.css';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu label='Tustin Street Tattoo'></Menu>
      </header>
    </div>
  );
}

export default App;
