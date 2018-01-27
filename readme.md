# jokio 🃏

simple functions for creating complex apps 

[![Build Status](https://travis-ci.org/jokio/jokio.svg?branch=master)](https://travis-ci.org/jokio/jokio)

### Idea:
```ts
type Process = (props: Props) => (state: State, context: Context) => Promise<State>
```

### Example:
```js
const process1 = (props) => (state, context) => {
  return { ...state, info: state.info + ' hello' };
}

const process2 = (props) => (state, context) => {
  return Promise.resolve({ ...state, info: state.info + ' world' });
}

const initialState = {
  info: '[Cool App]'
}

const run = compose(
  process1(),
  process2(),
)

run(initialState);
```

### Badge:
```
[![engine: jokio](https://img.shields.io/badge/engine-%F0%9F%83%8F%20jokio-44cc11.svg)](https://github.com/jokio/jokio)
```
[![engine: jokio](https://img.shields.io/badge/engine-%F0%9F%83%8F%20jokio-44cc11.svg)](https://github.com/jokio/jokio)
