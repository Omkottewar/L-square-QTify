import logo from './logo.svg';
import './input.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './Api/Api';
import Section from './Section/Section';
import { BrowserRouter } from 'react-router-dom';
import FilterSection from './FilterSection/FilterSection';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const generateTopAlbums = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbums(res);
    } catch (e) {
      console.log(e);
    }
  };

  const generateNewAlbums = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewAlbums(res);
    } catch (e) {
      console.log(e);
    }
  };

  const generateSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongs(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateSongs();
  }, []); 

  return (
    <div className="App w-full">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Section data={topAlbums} type="album" title="Top Albums" />
        <Section data={newAlbums} type="album" title="New Albums" />
        <FilterSection title="Songs" data={songs} type="song" />
      </BrowserRouter>
    </div>
  );
}

export default App;
