import React from 'react'
import './App.css';

function App() {
  const [data, setData] = React.useState()
  const [page, setPage] = React.useState()

  return (
    <div>
      {page === "audio"? <Audiotory data={data} /> : 
        page === "visual"? <Visual data={data}/> : <HomePage setData={setData} setPage={setPage}/>}
    </div>
  )
}

function Visual() {
  return (
    <div>visual</div>
  )
}

function Audiotory() {
  return (
    <div>audiotory</div>
  )
}

function HomePage(props) {
  const [error, setError] = React.useState(false)
  const [leanerType, setLearnerType] = React.useState()
  const handleFile = (event) => {
    console.log(event.target.files[0]);
          props.setData(event.target.files[0])}
  
  return (
    <div className="App">
      <h1>What type of learner are you</h1>
      <button onClick={() => setLearnerType("visual")}>Visual</button>
      <button onClick={() => setLearnerType("audio")}>Audiotory</button>
      <div style={{display: 'flex', flexDirection: 'column', borderStyle: 'solid', borderColor: 'black', height: '10rem'}}>
        <form style={{flex: 1}}>
          <input type='file' name='file' onChange={() => handleFile}/>
        </form>
          <textarea style={{flex: 5}} placeholder='type a summary of your text'></textarea>
      </div>
      <button onClick={() => {leanerType=== "visual"? props.setPage("visual"): 
                        leanerType=== "audio"? props.setPage("audio"): 
                        setError(true)}}> Next </button>
    </div>
  );

  }
export default App;
