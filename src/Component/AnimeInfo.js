import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import "../Style/Info.css"
function AnimeInfo(props) {
    const location = useLocation();
  const propsData = location.state;
  return (
    <div >
      <h3 className='mt-5 mb-5  text-light'>{propsData.title}</h3>
      <div className='mx-5 d-flex '>
        <img className='info-img' src={propsData.images.jpg.large_image_url} />
        <div className='p-5 text-light'>
          <p>{propsData.background}</p>
          <p>Rating : {propsData.rating}</p>
          <p>score : {propsData.score}</p>
          <p>year : {propsData.year} </p>
          <p>popularity : {propsData.popularity} </p>
          <p>title_japanese : {propsData.title_japanese} </p>
          <div className='container mx-5  embeded'>
            <ReactPlayer controls url={propsData.trailer.embed_url} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeInfo