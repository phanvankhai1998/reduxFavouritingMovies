import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MoviesCard from './MoviesCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>

        <div className="list">
          {
            data.map((movie, index) => (
              <MoviesCard movie={movie} index={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
