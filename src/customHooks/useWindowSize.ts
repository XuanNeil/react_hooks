import {useEffect, useState} from "react";

type TWindowSize = {
    width: number | undefined,
    height: number | undefined
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<TWindowSize>({width: undefined, height: undefined});

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};