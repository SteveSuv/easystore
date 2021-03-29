# @kavin-zhang/easystore

### Best state management for react based on pure hooks

### give me a star on [github](https://github.com/SteveSuv/easystore)

# usage

### install

```bash
npm i @kavin-zhang/easystore -S
```

### wrapping the root component with Provider

```jsx
// App.js
import React from "react";
import Home from "./Home";
import { Provider } from "@kavin-zhang/easystore";

const store = {
  state: {
    a: 1,
  },
  reducers: {
    addA(state, payload) {
      return {
        ...state,
        a: state.a + payload,
      };
    },
  },
};

export default () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
```

### using useStore to manage state in a page or component

```jsx
// Home.js
import React from "react";
import { useStore } from "@kavin-zhang/easystore";

export default () => {
  const store = useStore();
  const onclick = () => {
    store.dispatch({
      type: "addA",
      payload: 1,
    });
  };
  return <div onClick={onclick}>{store.state.a}</div>;
};
```
