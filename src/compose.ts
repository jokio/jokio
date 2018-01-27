
export const STATE_UNDEFINED = 'STATE_UNDEFINED'

// This is THE Function, this is whole framework, everything is built on that, this, is, sparta!! (kick)
export const compose = <TState>(...functions: ComposeFunction<TState>[]) => {
	let scopedContext = {}

	const initialValue: ComposeFunction<TState> =
		(state, context = {}) => (scopedContext = context) && Promise.resolve(state)

	const defaultValue = initialValue;

	return (functions.length === 0)
		? defaultValue
		: functions.reduce(
			// async function inside reducer function ^^
			(a: ComposeFunction<TState>, b) => async (...args) => {

				const state: TState = await a(...args)
				if (!state)
					throw Error(STATE_UNDEFINED)

				return b(state, scopedContext)
			},
			initialValue
		)
}

export type ComposeFunction<TState> = (state?: TState, context?) => Promise<TState> | TState;
