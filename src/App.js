import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform'
import Rank from './components/rank/rank'
import Particles from 'react-particles-js';

import 'tachyons';

const particplesOptions = {

  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particplesOptions}

        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />

        {
          /* <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
