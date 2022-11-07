import movieTrailer from "movie-trailer";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css"

const base_url = "https://images.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const[trailerUrl ,setTrailerUrl] = useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height:"390",
    with:"100",
    playerVars:{
        
        autoplay:1
    }
  }
const handleClick = (movie) =>{
    if(trailerUrl){
        setTrailerUrl("");

    }
    else {
        movieTrailer(movie?.name || "").then((url) =>{
            
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));

        }).catch((error)=> console.log(error))
    }
}
  console.log(movies);
  return (
    <div>
      <div className="row">
        <h2>{title}</h2>

        <div className={`row__posters `}>
          {/* {row posters} */}
          {movies.map((movie) => (
            <img
            key={movie.id}
            onClick={()=> handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        {trailerUrl &&
        <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
