/*
* Nếu bạn thấy mình thêm nhiều trình nghe sự kiện bằng useEffect, bạn có thể cân nhắc chuyển logic đó sang custom hook.
* useEventListener hook that handles checking if addEventListener is supported, adding the event listener, and removal on cleanup.
*/
/*eslint-disable @typescript-eslint/no-explicit-any*/
import {useEffect, useRef} from "react";

export // Hook
function useEventListener(eventName: string, handler: any, element = window) {
    // Create a ref that stores handler
    const savedHandler = useRef<any>(null);
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(
        () => {
            // Make sure element supports addEventListener
            // On
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;
            // Create event listener that calls handler function stored in ref
            const eventListener = (event: any) => savedHandler.current(event);
            // Add event listener
            element.addEventListener(eventName, eventListener);
            // Remove event listener on cleanup
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element] // Re-run if eventName or element changes
    );
}