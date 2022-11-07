import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "./axios";
import requests from './requests';
import "./Banner.css"

const Banner = () => {
    const[movie,setMovie] = useState([])
    useEffect(()=>{
     async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals)
        console.log(request.data.results[Math.floor(Math.random()* request.data.results.length-1)])
        setMovie(
            request.data.results[Math.floor(Math.random()* request.data.results.length-1)]
        )
        return request
        

     }
     fetchData();
    },[])
    console.log(movie)
  return (
    <div>
      <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center",
      }}> 
      <div className="banner__contents">
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}  
        </h1>
        <div className="banner__buttons" >
        <button className="banner_button">
            play
            </button>
            <button className="banner__button">
                My List
                </button>
                </div>
      </div>
      

       <div className="banner__description">
        {movie?.overview}
       </div>
        {/* {description} */}
        <div className='banner--fadeBottom'/>
      </header>
    </div>
  )
}

export default Banner
