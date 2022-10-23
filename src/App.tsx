import React from 'react';
import image from './react.png'
import logo from './logo.svg'

function App() {
  return (
    <div>
      <h1>Netflix application</h1>
      <img src={image} alt="React logo" width="300"></img>
      <img src={logo} alt="React logo" width="100"></img>
    </div>
  );
}

export default App;
