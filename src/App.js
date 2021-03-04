import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800
              }
            }
          }
        }}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
