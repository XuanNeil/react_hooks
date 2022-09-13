import {ForwardedRef, forwardRef} from "react";

export const MyInput = forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <input {...props} ref={ref}/>
    );
});