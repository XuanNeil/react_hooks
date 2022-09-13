import {useRef} from "react";

export const FocusTextInput = (): JSX.Element => {

    const inputRef = useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        inputRef.current?.focus();
    };

    return (
        <>
            <input ref={inputRef} type={"text"}/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}; 