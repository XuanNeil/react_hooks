import {useCallback, useState} from "react";
import {Content} from "src/hooks/useCallback/content";

export const DemoUseCallback = () => {
    const [count, setCount] = useState<number>(0);

    const handleChangeCount = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <>
            <Content onHandleIncrement={handleChangeCount}/>
            <h2>Count: {count}</h2>
            <button onClick={handleChangeCount}>Add 2</button>
        </>
    );
};