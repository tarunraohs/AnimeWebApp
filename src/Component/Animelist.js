import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import "../Style/Animelist.css"
import AnimeInfo from './AnimeInfo';
import AnimeDetails from './AnimeDetails';
export default function Animelist() { 
    const [animeList, setAnimeList] = useState([]);
    const [animeInfo, setAnimeInfo] = useState('')
  useEffect(() => {
    // Fetch top anime from the Jikan API
    axios.get('https://api.jikan.moe/v4/anime') 
      .then((response) => { 
        setAnimeList(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching anime data:', error);
      });
  }, []); 
  
  return (
    <div>
      <h1 className="text-light mt-5 mb-5">Top Anime</h1> 
      <div className='row container mx-5'> 
  
        <div className='container'>
          {animeInfo && <AnimeInfo animeData = {animeInfo} />}
        <div>  
          <div className='row'>   
            <AnimeDetails animedata={animeList} setAnimeInfo={setAnimeInfo} />
        </div>
        </div>
        
      </div>
        
      </div>
    </div>
  )
}
