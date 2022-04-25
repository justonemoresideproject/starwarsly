import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

/**
 * displays a list of films that the user has explored
 */

function FilmList() {
  const items = useSelector(st => Object.values(st.films).map(
    f => ({...f, url: `/films/${f.id}`})
  ));
  return <ItemList title="Films" items={items} />;
}

export default FilmList;