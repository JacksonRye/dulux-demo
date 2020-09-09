import React from 'react';
import './scss/App.css';
import PaletteView from './Views/PaletteView';
import Palette from './Components/Palette';
import { GlobalProvider } from './context/GlobalState';

function App() {


 
  return (
    <GlobalProvider>

      <PaletteView />
    </GlobalProvider>
      
      

  );
}

export default App;
