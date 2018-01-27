import { compose, ComposeFunction } from "./compose";


export const pubsub = <TState>() => {
    let items = [];

    return {
        subscribe: (event: ComposeFunction<TState>) => items.push(event),
        unsubscribe: (event: ComposeFunction<TState>) => items = items.filter(x => x !== event),
        publish: (data) => compose(...items)
    }
}
