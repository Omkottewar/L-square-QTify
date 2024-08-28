import logo from './logo.svg';
import './input.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero'
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import { fetchTopAlbums } from './Api/Api';
import Section from './Section/Section';

function App() {

  const [topAlbums,setTopAlbums] = useState([]);
  const [newAlbums,setNewAlbums] = useState([]);

  const generateTopAlbums = async()=>{
    try{
      const res = await fetchTopAlbums();
      setTopAlbums(res)
      console.log(res)
    }
    catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    generateTopAlbums()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
     <Section data={topAlbums}/>
    </div>
  );
}

export default App;
