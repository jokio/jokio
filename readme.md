# jokio

Idea:
```ts
type Process = (props: Props) => (state: State, context: Context) => Promise<State>
```


Example:
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