import React, { useState, useEffect } from "react";
import MainPageView from "./view.jsx";
import axios from "axios";

const { REACT_APP_IMDB_API_KEY } = process.env;
const MainPageContainer = () => {
  const [choice, setChoice] = useState("");
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [activeSearch, setActiveSearch] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const makeYourChoice = async (choice) => {
    setChoice(choice);

    if (choice === "Movies") {
      const fetchedMoovie = await axios(
        `https://imdb-api.com/en/API/Top250Movies/${REACT_APP_IMDB_API_KEY}`
      );
      setMovies(fetchedMoovie.data.items);
    }
    if (choice === "Tv-Shows") {
      const fecthedSeries = await axios(
        `https://imdb-api.com/en/API/Top250TVs/${REACT_APP_IMDB_API_KEY}`
      );

      setTvShows(fecthedSeries.data.items);
    }
  };

  const resetChoice = () => {
    setChoice("");
    setMovies([]);
    setTvShows([]);
    setActiveSearch([]);
  };

  const createPersonnalChoice = async (search) => {
    const findPersonnalChoice = await axios(
      `https://imdb-api.com/en/API/Search/k_h8n0x2p8/${search}`
    );

    setActiveSearch(findPersonnalChoice);

    /* console.log(findPersonnalChoice); */
  };

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <MainPageView
      choice={choice}
      makeYourChoice={makeYourChoice}
      movies={movies}
      tvShows={tvShows}
      resetChoice={resetChoice}
      createPersonnalChoice={createPersonnalChoice}
      activeSearch={activeSearch}
      inputValue={inputValue}
      onChangeInputValue={onChangeInputValue}
    />
  );
};

export default MainPageContainer;
