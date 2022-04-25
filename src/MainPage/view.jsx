import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const MainPageView = ({ choice, makeYourChoice, movies, tvShows }) => {
  return (
    <>
      {!choice && (
        <div className="choosePgrm">
          <p className="title">What are you looking for ?</p>
          <div className="choices">
            <p onClick={() => makeYourChoice("moovie")} className="choice">
              Moovie
            </p>{" "}
            <p onClick={() => makeYourChoice("tvshow")} className="choice">
              Tv Show
            </p>
          </div>
        </div>
      )}
    </>
    /*    <input
        className="searchBar"
        type="text"
        name="name"
        placeholder=" moovie or TV Show "
        onChange={() => console.log("test")}
      /> */
  );
};

MainPageView.prototypes = {
  choice: PropTypes.string.isRequired,
  makeYourChoice: PropTypes.func.isRequired,
  movies: PropTypes.array,
  tvShows: PropTypes.array,
};
export default MainPageView;
