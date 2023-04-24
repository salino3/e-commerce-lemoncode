import { useState } from 'react';
import { AppRouter } from './router';
import { Header } from './components';
import './App.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App
