import React, { useState, useEffect } from "react";
import axios from 'axios';
import Image from './Image';
import "./App.css";

const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=6s8lcv8nth7JkF1rcx3Ng8jGwvWcXbFdGb4VNbcy";

function App() {
  const [apod, setApod] = useState([]);

 
  useEffect(() => {
    axios.get(nasaApi)
      .then(response => setData(response.data))
      .catch(error => error)
  }, [])
  
  return (
    <div className="App">
     <h1> Nasa Image of the Day </h1>
    </div>
  );
}

export default App;
