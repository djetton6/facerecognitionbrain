import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform'
import Rank from './components/rank/rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/facerecognition'

import 'tachyons';

const app = new Clarifai.App({
  apiKey: 'a8467f43f8e448c3ae456a7175b9f94b'
});

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
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
        console.log(response);
      },
      function (err) {
        // there was an error
      }
    );
  }


  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particplesOptions}

        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSumbit={this.onButtonSubmit} />

        <FaceRecognition />
      </div>
    );
  }
}

export default App;
