import {ChangeEvent} from "react";
import {useTitle} from "src/customHooks/useTitle";

export const useTitleComponent = () => {
    const [title, setTitle] = useTitle("Demo");

    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <>
            <input onChange={handleChangeTitle} value={title}/>
        </>
    );
};