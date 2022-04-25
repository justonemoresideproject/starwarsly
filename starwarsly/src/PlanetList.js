import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'

/**
 * displays a list of planets that the user has explored
 */

function PlanetList() {
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;