import {TWindowSize, useWindowSize} from "src/customHooks/useWindowSize";

export const useWindowSizeComponent = () => {

    const size: TWindowSize = useWindowSize();
    return (
        <div>
            {size.width}px / {size.height}px
        </div>
    );
};