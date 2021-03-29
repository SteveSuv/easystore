import React from "react";

const Context = React.createContext();

export const Provider = ({ store = { state: {}, reducers: {} }, children }) => {
  const Reducers = (state, action = { type: "", payload: {} }) => {
    const reducerFunc = store.reducers[action.type];
    return reducerFunc ? reducerFunc(state, action.payload) : state;
  };

  const [state, dispatch] = React.useReducer(Reducers, store.state);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const useStore = () => {
  const [state, dispatch] = React.useContext(Context);
  return { state, dispatch };
};
