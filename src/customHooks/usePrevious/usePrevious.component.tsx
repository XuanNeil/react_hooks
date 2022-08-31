import {useState} from "react";
import {usePrevious} from "src/customHooks/usePrevious";

export const usePreviousComponent = () => {
    const [count, setCount] = useState<number>(0);
    const previousCount = usePrevious<number>(count);

    const handleChangeCount = () => {
        setCount((prevCount => prevCount + 1));
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Previous Count: {previousCount}</h2>
            <button onClick={handleChangeCount}>Increment</button>
        </div>
    );
};