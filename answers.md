- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  
  it is used to determine digits between 0-9
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?

  It is stored in the local storage of your browser and handled by the redux-persist package
  
- What does `combineReducers` do? Why are we using it? 

  it takes all of the reducers we've built up and combines them into just one place

- How does the "Reset to Fresh Exploration" feature work?

  it resets the redux store in order to allow the user to re-explore the site. Since the links are unknown until explored, the links will return to unknown since they are based off of the redux store. 

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?

  It reduces redundant code

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?

  it reduces the number of computations from an entire list to only a single item
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?

  This piece of code right here and its implementations

  characters = characters.map(url => url.match(/\d+/)[0]);

  this piece of code is used across multiple different components but its use is genius since it allows a complete list of all items in the database without actually pulling all of the items
  
- Which Star Wars character would make the best React developer, and why?

  Probably Han since he could do it all Solo