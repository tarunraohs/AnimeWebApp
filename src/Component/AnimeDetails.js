import React from 'react'
import "../Style/Search.css"
import { Link } from 'react-router-dom'
function AnimeDetails({animedata,setAnimeInfo }) {
  return (
    <div className='row mx-5'>
            {
                animedata ? (animedata.map((data) => {
                    return (
                            <div className='col-md-2 container mb-3' onClick={()=>setAnimeInfo(data)}>
                                {console.log(data)} 
                               <Link className='link-offset-2 link-underline link-underline-opacity-0 text-light' to='/animeinfo' state={data}>
                               <div key={data.id}> <img className='img' src={data.images.jpg.large_image_url} alt='...' />
                                    <span className='heading mb-5'>{data.title}</span>
                                </div>
                               </Link> 
                             </div>
                    )
                })
                ) : 'not found'
            }
        </div>
  )
}
export default AnimeDetails