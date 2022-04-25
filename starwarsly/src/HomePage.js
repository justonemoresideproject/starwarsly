import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { resetAll } from "./actions/reset";

/** 
 * HomePage component displays the homepage of the app. 
 * Upon landing the user will be given the option to check out the first film and after exploring the site the user can return to the reset the redux store and "re-explore" the site
 * This explorable functionality is kept track of by the loaded variable which determines whether or not the first film has been visited.
 * The reset functionality is handled by the reset() function which dispatches a resetAll command to every redux store.
*/

function HomePage() {
  const loaded = useSelector(st => st.films[1] !== undefined);
  const dispatch = useDispatch();

  function reset() {
    dispatch(resetAll());
  }
  
  return (
    <>
      {loaded ? (
        <button
          className="btn btn-danger btn-block btn-lg"
          onClick={reset}
        >
          Reset To Fresh Exploration
        </button>
      ) : (
        <Link to="/films/1" className="btn btn-primary btn-block btn-lg">
          Start with &ldquo;A New Hope&rdquo;
        </Link>
      )}
      <img
        className="mt-3 mb-5 w-100"
        alt="StarWars.ly"
        src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
      />
    </>
  );
}

export default HomePage;
