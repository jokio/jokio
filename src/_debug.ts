import compose from "./compose";
import log from "./log";

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
	process1({}),
	process2({}),
	log(),
)

run(initialState);
