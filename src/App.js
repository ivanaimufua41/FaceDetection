import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({
 apiKey: '678a97951c7e4dc18e696f4587c1e660'
});

const particleOptions = {
  particles: {
    number:{
      value: 50,
      density:{
        enable:true,
        value_area:700
      }
    },
    color: {
      value: '#ffffff'
    },
    polygon: {
        nb_sides: 7
      }
    }
  }



class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box:{},
      route:'signin',
      isSignedIn:false
    }
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftColumn: face.left_col * width,
      topRow: face.top_row * height,
      rightColumn: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({isSignedIn: false})
    }else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
              .then(response => this.displayFaceBox(this.calculateFaceLocation(response))
              .catch(err => console.log(err))
    );
  }

  render() {

    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        { this.state.route === 'home'
          ?<div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
            </div>
            :(
              this.state.route === 'signin' 
              ? <SignIn onRouteChange={this.onRouteChange} className="login" />
              : <Register onRouteChange={this.onRouteChange} className="login" />
              )        
        }     
      </div>
    );
  }
}

export default App;
