import {useReducer} from "react";

/**
 * *
 * *  1. Initial State
 * *  2. Action type
 * *  3. reducer function
 * *  4. dispatch
 * *
 */

const initialState = {
    count: 0
};

const incrementType = "Increment";
const decrementType = "Decrement";

const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
        case incrementType:
            return {count: state.count + 1};
        case decrementType:
            return {count: state.count - 1};
        default:
            throw new Error();
    }
};

export const Counter = (): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: decrementType})}>-</button>
            <button onClick={() => dispatch({type: incrementType})}>+</button>
        </div>
    );
};