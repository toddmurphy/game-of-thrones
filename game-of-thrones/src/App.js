import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CharacterList from './components/CharacterList';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Route exact path={'/Home'} component={Home} />
        <Route exact path={'/Characters'} component={CharacterList} />
      </div>
    </div>
  );
}

export default App;
