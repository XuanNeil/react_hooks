import {useState} from "react";
import {useDebounce} from "src/customHooks/useDebounce";

export const useDebounceComponent = () => {

    const [search, setSearch] = useState<string>("");
    const debounceValue = useDebounce<string>(search);


    return (
        <input value={debounceValue} onChange={(e) => setSearch(e.target.value)}/>
    );
};