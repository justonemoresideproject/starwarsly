import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

/**
 * displays a list of persons that the user has explored
 */

function PersonList() {
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;