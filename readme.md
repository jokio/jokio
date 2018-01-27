# jokio

Idea:
```ts
(props: Props) => (state: State, context: Context) => Promise<State>
```


Example:
```ts
const process1 = (props) => (state, context) => {
	return { ...state, info: state.info + ' hello' };
}

const process2 = (props) => (state, context) => {
	return Promise.resolve({ ...state, info: state.info + ' world' });
}

const initialState = {
	info: '[Demo App]'
}

const run = compose(
	process1,
	process2,
)

run(initialState);
```