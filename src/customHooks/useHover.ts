import {MutableRefObject, useEffect, useRef, useState} from "react";

/**
 * Hook: useHover.
 * @param T - could be any type of HTML element like: HTMLDivElement, HTMLParagraphElement and etc.
 * @return hook returns tuple(array) with type [any, boolean]
 * --------------
 * const [hoverRef, isHovered] = useHover<HTMLDivElement>();
 * return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
 **/

export function useHover<T extends HTMLElement>(): [MutableRefObject<T | null>, boolean] {

    const [value, setValue] = useState<boolean>(false);
    const ref = useRef<T>(null);

    const handleMouseOver = (): void => setValue(true);
    const handleMouseOut = (): void => setValue(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);

            return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, []);

    return [ref, value];
}