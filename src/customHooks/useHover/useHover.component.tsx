import {useHover} from "src/customHooks/useHover";

export const useHoverComponent = () => {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    return (
        <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>
    );
};