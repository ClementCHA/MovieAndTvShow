import React, { useState, useEffect } from "react";
import MainPageView from "./view.jsx";
import axios from "axios";

const { REACT_APP_IMDB_API_KEY } = process.env;
const MainPageContainer = () => {
  const [choice, setChoice] = useState("");
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  const makeYourChoice = async (choice) => {
    setChoice(choice);

    if (choice === "moovie") {
      const fetchedMoovie = await axios(
        `https://imdb-api.com/en/API/Top250Movies/${REACT_APP_IMDB_API_KEY}`
      );
      setMovies(fetchedMoovie.data.items);
    }
    if (choice === "tvshow") {
      const fecthedSeries = await axios(
        `https://imdb-api.com/en/API/Top250TVs/${REACT_APP_IMDB_API_KEY}`
      );
      setTvShows(fecthedSeries.data.items);
    }
  };

  return (
    <MainPageView
      choice={choice}
      makeYourChoice={makeYourChoice}
      movies={movies}
      tvShows={tvShows}
    />
  );
};

export default MainPageContainer;
