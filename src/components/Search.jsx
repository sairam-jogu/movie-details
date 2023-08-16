import React from "react";
import Input from "./Input";
const Search = () => {
  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <h1 className="text-white" style={{ padding: "5px" }}>
        Search For Movies and Series...
      </h1>
      <Input />
    </div>
  );
};

export default Search;
