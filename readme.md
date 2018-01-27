# jokio 🃏

simple functions for creating complex apps 

[![Build Status](https://travis-ci.org/jokio/jokio.svg?branch=master)](https://travis-ci.org/jokio/jokio)

### Idea:
```ts
type Process = (props: Props) => (state: State, context: Context) => Promise<State>
```

### Badge:
```
[![engine: jokio](https://img.shields.io/badge/engine-🃏%20jokio-27ae60.svg)](https://github.com/jokio/jokio)
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
