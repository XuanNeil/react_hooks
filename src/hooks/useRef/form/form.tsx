import {useRef} from "react";
import {MyInput} from "src/hooks/useRef/form/components/myInput";

export const Form = (): JSX.Element => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <>
            <MyInput ref={inputRef}/>
            <button onClick={handleClick}>Focus the input</button>
        </>
    );
};