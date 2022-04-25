import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router-dom";
import { getFilmFromAPI } from "./actions/films";
import Sublist from "./Sublist";

/**
 * Film component displays individual films that are kept in the redux store
 * 
 * uses params to find the id of the film and then confirms that the film is in the redux store. 
 * 
 * If the film is not in the store then the useEffect function will call the getFilmFromApi action to the pull the film from the database and refresh the component.
 * 
 * planetState and characterState are variables used to keep track of which parts of the site have been explored and which have not. If the character or planet has been explored then it will be in the redux store. 
 * 
 * The planets and characters variables are lists that use their state counterpart to confirm if the item has been explored on the site. If the planet or character has been explored then it will return that name, otherwise it will return unknown.
 * 
 */


function Film() {

  const {id} = useParams();
  const film = useSelector(st => st.films[id]);
  const planetState = useSelector(st => st.planets);
  const characterState = useSelector(st => st.people);
  const dispatch = useDispatch();
  const missing = !film;

  useEffect(function() {
    if (missing) {
      dispatch(getFilmFromAPI(id));
    }
  }, [missing, id, dispatch]);

  if (missing) return <h1 className="mt-5">loading...</h1>;

  const planets = film.planets.map(pid => ({
    id: pid,
    url: `/planets/${pid}`,
    display: planetState[pid] ? planetState[pid].name : "Unknown"
  }));

  const characters = film.characters.map(cid => ({
    id: cid,
    url: `/people/${cid}`,
    display: characterState[cid] ? characterState[cid].name : "Unknown"
  }));

  return (
    <div>

      <h1 className="mt-3 mb-3">
        {film.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p className="lead">{film.openingCrawl}</p>

      <p><b>Director: </b>{film.director}</p>

      <Sublist title="Planets" items={planets} />
      <Sublist title="People" items={characters} />
    </div>
  );
}

export default Film;