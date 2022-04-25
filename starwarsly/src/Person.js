import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getPersonFromAPI } from "./actions/people";
import Sublist from "./Sublist";

/**
 * Person component displays individual persons that are kept in the redux store
 * 
 * uses params to find the id of the person and then confirms that the person is in the redux store. 
 * 
 * If the person is not in the store then the useEffect function will call the getPersonFromApi action to the pull the person from the database and refresh the component.
 * 
 * planetState and filmState are variables used to keep track of which parts of the site have been explored and which have not. If the planet or film has been explored then it will be in the redux store. 
 * 
 * The films variable is a list that uses its state counterpart to confirm if the item has been explored on the site. If the film has been explored then it will return that name, otherwise it will return unknown.
 * 
 */

function Person() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const person = useSelector(st => st.people[id]);
  const planetState = useSelector(st => st.planets);
  const filmState = useSelector(st => st.films);
  const missing = !person;

  useEffect(function() {
    if (missing) {
      dispatch(getPersonFromAPI(id));
    }
  }, [id, missing, dispatch]);

  if (missing) return "loading...";

  const hw = person.homeworld;
  const homeworld = {
    id: hw,
    url: `/planets/${hw}`,
    display: planetState[hw] ? planetState[hw].name : "Unknown"
  };

  const films = person.films.map(fid => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="my-3">
        {person.name}
        <small className="text-muted float-right">{person.id}</small>
      </h1>

      <p><b>Gender: </b>{person.gender}</p>
      <p><b>Birth Year: </b>{person.birthYear}</p>
      <p>
        <b>Homeworld: </b>
        <Link to={homeworld.url}>{homeworld.display}</Link>
      </p>

      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Person;

