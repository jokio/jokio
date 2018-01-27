import { compose, ComposeFunction } from './compose'

export const runWith = (props: RunProps = {}) => async <TState>(...functions: ComposeFunction<TState>[]) => {
	props = props || {};

	const { errorFn = defaultErrorFn, showTime, disableGlobalScope } = props;
	const startTime = Date.now()

	try {
		await compose(...functions)(<TState>{}, disableGlobalScope ? null : {})
	}
	catch (err) {
		if (errorFn)
			await errorFn(err);
	}
	finally {
		if (showTime)
			console.log(Date.now() - startTime)
	}
}

export const run = <TState>(...functions: ComposeFunction<TState>[]) => runWith()(...functions)

export interface RunProps {
	errorFn?: (err) => Promise<void> | void
	showTime?: boolean
	disableGlobalScope?: boolean
}


const defaultErrorFn = x => console.log(x)
