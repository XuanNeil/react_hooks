import {forwardRef, useImperativeHandle, useRef} from "react";

export const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
        // Only expose focus and nothing else
        focus() {
            realInputRef.current?.focus();
        },
    }));
    return <input {...props} ref={realInputRef}/>;
});