/*eslint-disable @typescript-eslint/no-explicit-any*/
/**
 * Hooks này cho phép nhấn chuột bên ngoài 1 phần tử được chỉ định.
 * Được sủ dụng cho dropdown menus, tooltip, etc
 */

import {useEffect} from "react";

export function useOnClickOutSideHooks<T extends HTMLElement>(ref: T | any, callback: (event: any) => void) {

    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) return;
            callback(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
}