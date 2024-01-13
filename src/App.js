import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {

  const [SelectedImage, setSelectedImage] = React.useState()
  //const [HasMediaLibraryPermissions, setHasMediaLibraryPermissions] = React.useState()
  //const [photo, setPhoto] = React.useState()


  return (
    <div className="App">
      <h1>What type of learner are you</h1>
      <button>Visual</button>
      <button>Audiotory</button>
      <div style={{display: 'flex', flexDirection: 'column', borderStyle: 'solid', borderColor: 'black', height: '10rem'}}>
        <button style={{flex: 1}} onClick={(e) => (event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0])}}>import image</button>
        <textarea style={{flex: 5}} placeholder='type a summary of your text'></textarea>
      </div>
    </div>
  );
}

export default App;
