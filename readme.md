# jokio 🃏

simple functions for creating complex apps 

[![Build Status](https://travis-ci.org/jokio/jokio.svg?branch=master)](https://travis-ci.org/jokio/jokio)
[![npm version](https://badge.fury.io/js/jokio.svg)](https://badge.fury.io/js/jokio)

### Idea:
In every process we need three different objects:
* Props
* State
* Context

jokio provides following structure to describe processes and make it composable
```ts
type Process = (props: Props) => (state: State, context: Context) => Promise<State>

const process1: Process
const process2: Process

const run = compose(
  process1,
  process2,
)

run(initialState, initialContext)
```


### Functions:
- compose
- run
- runWith
- log
- timer
- pubsub
- uniqueId


### Example:
```js
import { compose, log } from 'jokio'

const process1 = (props) => (state, context) => {
  return { ...state, info: state.info + ' hello' }
}

const process2 = (props) => (state, context) => {
  return Promise.resolve({ ...state, info: state.info + ' world' })
}

const initialState = {
  info: '[Cool App]'
}

const run = compose(
  process1({}),
  process2({}),
  log(),
)

run(initialState)

```

### Related Projects:
* [GraphQL Server](https://github.com/jokio/jokio-graphql)
* [NextJS](https://github.com/jokio/jokio-nextjs)
* [create-jokio-app](https://github.com/jokio/create-jokio-app)
* [Yo App Generator](https://github.com/jokio/generator-jokio)


### Quick Start:
just run:
```bash
yarn create jokio-app myapp
```

### Yeoman
You can also use yo generator

install once:
```bash
npm i -g yo generator-jokio
```

create app:
```
yo jokio
```
Note: this command will not create a new folder, it will generate files in current folder


### Badge:
```
[![engine: jokio](https://img.shields.io/badge/engine-%F0%9F%83%8F%20jokio-44cc11.svg)](https://github.com/jokio/jokio)
```
[![engine: jokio](https://img.shields.io/badge/engine-%F0%9F%83%8F%20jokio-44cc11.svg)](https://github.com/jokio/jokio)
