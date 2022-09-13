import {useRef} from "react";
import {MyInput} from "src/hooks/useImperativeHandle/form/components/myInput";

export function Form() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.focus();
    }

    return (
        <>
            <MyInput ref={inputRef}/>
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}