import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../myFiles/movieDetails.css";
import Trailer from "../components/Trailer";

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { id, type } = useParams();
  const [video, setVideo] = useState([]);
  const [syn, setSyn] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let winWidth = window.innerWidth;

      if (winWidth <= 320) {
        setSyn(true);
      } else setSyn(false);
    });
  }, []);

  useEffect(() => {
    // let url =  `https://api.themoviedb.org/3/movie/${id}?api_key=d736a51c9aacefa567f5604c57f76b95&language=en-US&page=1`;
    // axios.get(url).then((response)=>{
    //     console.log(response.data)
    //     type = (response.data.number_of_episodes ? "movie" : "tv")
    // })

    getData();
    getTrailer();

    window.scrollTo(0, 0);
  }, []);

  const getTrailer = () => {
    let url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=d736a51c9aacefa567f5604c57f76b95&language=en-US&page=1`;
    axios.get(url).then((response) => {
      console.log(response.data.results);
      var res = response.data.results;

      setVideo(
        res.filter(
          (item) =>
            item.name.indexOf("Official Trailer") ||
            item.name.indexOf("Trailer") > 0
        )
      );
    });
  };

  const getData = () => {
    let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=d736a51c9aacefa567f5604c57f76b95&language=en-US&page=1`;
    axios.get(url).then((response) => {
      console.log(response.data);
      setDetails(response.data);
    });
  };

  return (
    <>
      <div className="movie">
        <div className="movie__intro">
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              details ? details.backdrop_path : ""
            }`}
          />
        </div>
        <div className="movie__detail">
          <div className="movie__detailLeft">
            <div className="movie__posterBox ">
              <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original${
                  details ? details.poster_path : ""
                }`}
              />
            </div>
          </div>
          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name">
                {details ? details.original_title || details.name : ""}
              </div>
              <div className="movie__tagline">
                {details ? details.tagline : ""}
              </div>
              <div className="movie__rating">
                {details ? details.vote_average : ""}{" "}
                <i className="fas fa-star" />
                <span className="movie__voteCount">
                  {details ? "(" + details.vote_count + ") votes" : ""}
                </span>
              </div>
              <div className="movie__runtime">
                {details ? details.runtime || details.number_of_episodes : ""}
              </div>
              <div className="movie__releaseDate">
                {details ? "Release date: " + details.release_date : ""}
              </div>
              <div className="movie__genres">
                {details &&
                  details.genres &&
                  details.genres.map((genre, index) => (
                    <span className="movie__genre" key={index} id={genre.id}>
                      {genre.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div className="syn-text">
                {details
                  ? syn
                    ? details.overview.slice(0, 307)
                    : details.overview
                  : ""}
              </div>
            </div>

            {video.length > 0 && <Trailer yes={video} />}
            <button
              style={{ textDecoration: "none", margin: 3 }}
              className="btn my-btn p-2"
            >
              <span>
                Add to Watch list <i className="fa-regular fa-heart"></i>
              </span>
            </button>
          </div>
        </div>
        {/* <div className="movie__links"> */}
        {/* <div className="movie__heading">Useful Links</div> */}
        {/* {
                    details && details.homepage && <button onClick={<Trailer {...video}/>} style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></button>
                } */}
        {/* {video.length>0 && <Trailer yes={video} />} */}
        {/* {
                     <button className='btn btn3'  ><p><span className="movie__homeButton movie__Button">WatchList <i className="newTab fa fa-heart"></i></span></p></button>
                } */}

        {/* <a  target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">WatchList <i className="newTab fa-regular fa-heart"></i></span></p></a>
                {
                    details && details.imdb_id && <a href={"https://www.imdb.com/title/" + details.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                } */}
        {/* </div> */}
      </div>
    </>
  );
};

export default MovieDetails;
