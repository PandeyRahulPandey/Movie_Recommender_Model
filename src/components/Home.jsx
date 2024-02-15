import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      setSearch(event.target.value);
      console.log(search);
      navigate(`/search/${search}`);
    }
  };
  return (
    <div className="my-[2rem] ">
      <h1 className="text-2xl font-bold text-center">
        Search to find Similar Movies
      </h1>
      <div className="mt-[2rem]  mx-[8rem]">
        <input
          type="text"
          aria-label="Enter movie to search"
          placeholder="Enter movie to search"
          autoComplete="off"
          className="rounded-lg flex pl-12 pr-3 md:py-[0.6rem] py-[0.5rem] ring-2 ring-white border-none outline-none w-full mx-4 my-4 md:text-base "
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
};

export default Home;
