
export default (info?) => (state, context) => {
	if (context.startTime)
		console.log(info, Date.now() - context.startTime);

	context.startTime = Date.now();

	return state
}
