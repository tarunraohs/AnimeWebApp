import React, { useState} from 'react'
import axios from  'axios'
import AnimeDetails from './AnimeDetails'
import AnimeInfo from './AnimeInfo'
import '../Style/Search.css'
function Search() { 
    const [search,setSearch] = useState('naruto');
    const [details,setDetails] = useState(''); 
    const [animeInfo, setAnimeInfo] = useState('')
    const fetchData = ()=>{
      axios.get(`https://api.jikan.moe/v4/anime?q=${search}&limit=10`).then((res)=>{
        setDetails(res.data.data) 
      })
    }
  return (
    <div className='container'> 
    <div className='my-5'>
    <input className='input' placeholder='search anime...' onChange={(event)=>{setSearch(event.target.value)}} /> 
    <button className='btn bg-tertiary mx-2 text-light' onClick={fetchData}>search</button>
    </div> 
    <div className='container'>
      <div className='conatiner '>
    <div className='anime-info'>
      {animeInfo && <AnimeInfo  animeData={animeInfo}/>}
    </div>
      <div className='row '> 
          <AnimeDetails animedata={details} setAnimeInfo={setAnimeInfo}/>
      </div>
      </div> 
    </div>
    </div>
  ) 
}

export default Search