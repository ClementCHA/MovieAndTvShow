import React from "react";
import PropTypes from "prop-types";
import Loupe from "./306102.svg";
import "./style.scss";

const MainPageView = ({
  choice,
  makeYourChoice,
  movies,
  tvShows,
  resetChoice,
  createPersonnalChoice,
  activeSearch,
  inputValue,
  onChangeInputValue,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    createPersonnalChoice(inputValue);
  };

  return (
    <>
      {!choice && (
        <div className="choosePgrm">
          <p className="title">What are you looking for ?</p>
          <div className="choices">
            <p onClick={() => makeYourChoice("Movies")} className="choice">
              Moovie
            </p>{" "}
            <p onClick={() => makeYourChoice("Tv-Shows")} className="choice">
              Tv Show
            </p>
          </div>
        </div>
      )}
      {choice && (
        <>
          <div className="searchPage">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="searchBar"
                type="text"
                name="name"
                value={inputValue}
                placeholder={`${choice}`}
                onChange={onChangeInputValue}
              />
              <button
                className="submitButton"
                type="submit"
                disabled={inputValue.length > 0 ? false : true}
              >
                <img
                  style={{
                    margin: "-0.5em",
                    width: "2em",
                    height: "auto",
                    filter: "invert(1)",
                  }}
                  src={Loupe}
                  alt="loupe"
                />
              </button>
            </form>
          </div>
          <button onClick={resetChoice} className="return">
            Return To Main Page
          </button>
          {activeSearch.length === 0 && (
            <div className="cards">
              {(movies.length > 0 ? movies : tvShows).map((pgrm) => {
                return (
                  <div
                    key={pgrm.rank}
                    className="card"
                    onClick={() =>
                      window.open(
                        `https://www.imdb.com/find?q=${pgrm.title}`,
                        "_blank"
                      )
                    }
                  >
                    <h1 className="cardTitle">
                      {pgrm.title.toUpperCase()} -{" "}
                      <span className="imdNote">{pgrm.imDbRating}/10</span>
                    </h1>
                    <img
                      className="cardImage"
                      src={pgrm.image}
                      alt="filmImage"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

MainPageView.prototypes = {
  choice: PropTypes.string.isRequired,
  makeYourChoice: PropTypes.func.isRequired,
  resetChoice: PropTypes.func.isRequired,
  createPersonnalChoice: PropTypes.func.isRequired,
  movies: PropTypes.array,
  tvShows: PropTypes.array,
  activeSearch: PropTypes.array,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};
export default MainPageView;
