import {useToggle} from "src/customHooks/useToggle";

export const useToggleComponent = () => {
    const [isTextChanged, setIsTextChanged] = useToggle();

    return (
        <button onClick={setIsTextChanged}>{isTextChanged ? "Toggled" : "Click to Toggle"}</button>
    );
};