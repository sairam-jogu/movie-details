import axios from "axios";
import React from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

const Input = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  //   const [tele, setTv] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=d736a51c9aacefa567f5604c57f76b95&page=1&query=${e.target.value}`;
    axios
      .get(url)
      .then((response) => {
        if (!response.data.errors) {
          setResults(response.data.results);

          //   console.log(query);
        } else {
          setResults([]);
        }
      })
      .catch((error) => console.log(error));

    // let url2 = `https://api.themoviedb.org/3/search/tv?api_key=d736a51c9aacefa567f5604c57f76b95&page=1&query=${e.target.value}`;
    // axios
    //   .get(url2)
    //   .then((response) => {

    //     if (!response.data.errors) {
    //         setTv(response.data.results);

    //     //   console.log(query);
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

  function handleClick() {
    setResults([]);
  }

  return (
    <>
      <div className="input-group mb-3 py-3 search">
        <input
          type="text"
          value={query}
          onChange={onChange}
          className="form-control"
          placeholder="Search Movies and Series"
        />
        <span
          className="input-group-text btn btn-dark"
          id="basic-addon2"
          style={{ backgroundColor: "#ff004f" }}
        >
          Search
        </span>
      </div>

      {/* {results.length > 0 && (
        <section>
          <div className="container p-2">
            <div className="myClass  gap-3">
              {results.map((movie, index) => {
                return <MovieCard key={index} {...movie} />;
              })}

              {tele.map((movie, index) => {
                return <MovieCard key={index} {...movie} />;
              })}
            </div>
          </div>
        </section>
      )} */}

      {results.length > 0 && (
        <section>
          <div className="container p-2">
            <div className="myClass  gap-3">
              {results &&
                results.map((movie, index) => {
                  return (
                    <MovieCard onClick={handleClick} key={index} {...movie} />
                  );
                })}

              {/* {tele && tele.map((movie, index) => 
                 <MovieCard key={index} {...movie} />
              )} */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Input;
