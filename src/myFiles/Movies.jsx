import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [list, setList] = useState([]);
  const { type } = useParams();

  console.log(type);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  let url = `https://api.themoviedb.org/3/${
    type ? type : "movie"
  }/top_rated?api_key=d736a51c9aacefa567f5604c57f76b95&language=en-US&page=1`;

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setList(response.data.results);
      })
      .catch();
  };

  return (
    <>
      <div className="main-heading">
        <h1 className="big-heading p-3 text-center text-white">
          <span className="logo">{type ? type.toUpperCase() : "MOVIES"}</span>
        </h1>
      </div>
      <section className="trending">
        <div className="container p-2">
          <div className="myClass  gap-2">
            {list.map((movie, index) => {
              return <MovieCard key={index} {...movie} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
