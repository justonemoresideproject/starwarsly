import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getPlanetFromAPI } from "./actions/planets";
import Sublist from "./Sublist";

/**
 * Planet component displays individual planets that are kept in the redux store
 * 
 * uses params to find the id of the planet and then confirms that the planet is in the redux store. 
 * 
 * If the planet is not in the store then the useEffect function will call the getPlanetFromApi action to the pull the planet from the database and refresh the component.
 * 
 * filmState and characterState are variables used to keep track of which parts of the site have been explored and which have not. If the character or film has been explored then it will be in the redux store. 
 * 
 * The films and residents variables are lists that use their state counterpart to confirm if the item has been explored on the site. If the films or residents has been explored then it will return that name, otherwise it will return unknown.
 * 
 */

function Planet() {
  const {id} = useParams();
  const planet = useSelector(st => st.planets[id]);
  const filmState = useSelector(st => st.films);
  const characterState = useSelector(st => st.people);
  const dispatch = useDispatch();
  const missing = !planet;

  useEffect(function() {
    if (missing) {
      dispatch(getPlanetFromAPI(id));
    }
  }, [missing, id, dispatch]);

  if (missing) return "loading...";

  const films = planet.films.map(fid => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown"
  }));

  const residents = planet.residents.map(pid => ({
    id: pid,
    url: `/people/${pid}`,
    display: characterState[pid] ? characterState[pid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="mt-3 mb-3">
        {planet.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p><b>Climate: </b>{planet.climate}</p>
      <p><b>Population: </b>{planet.population}</p>

      <Sublist title="People" items={residents} />
      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Planet;
