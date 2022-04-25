import axios from 'axios';
import { LOAD_FILM } from "./types";


function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;

    console.log(characters)
    console.log(planets)

    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    console.log(characters)
    console.log(planets)

    const film = { 
      id, 
      name, 
      director, 
      openingCrawl, 
      characters, 
      planets 
    };
    dispatch(gotFilm(film));
  };
}


function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }