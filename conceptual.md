### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
A centralized container for state

- What are three features of the Redux developer tool in Chrome?
tracing actions, allow/block actions, locking to the current state

- What is a store?
a centralized storage for state

- What is a reducer?
a function that returns a new state

- What is an action?
a part of a reducer used to change the state

- What is an action creator?
a function that returns an action

- How does data flow in a React/Redux application?
one way from the store to the ui

- What is the purpose of the `<Provider>` component?
to provide data from the redux store to the rest of the application

- What is the purpose of the `useSelector` hook? What does it return?
it is used to return data from the redux store

- Describe the `useDispatch` hook. What do you use it for?
it is used to send new data to the redux store

- What is redux-thunk and why would you use it?
it is an action that returns an asynchronous function and calls another action 

- What are propTypes?
a mechanism used to ensure that a component uses the correct type of data

- Describe the `useCallback` hook.  What is it used for?
it is a hook used to return a 'memoized' callback. That is to say that the callback is kept in cache in order to return the function much faster

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
it's the same centralized store but instead of being used globally, it is kept within a single function. The useReducer hook would be best used when state is only needed within a single component. The redux store would be used when the data was needed across multiple components not within the same top down hierarchy  