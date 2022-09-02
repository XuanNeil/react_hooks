import {useLocalStorage} from "src/customHooks/useLocalStorage";

export const useLocalStorageComponent = () => {

    const [name, setName] = useLocalStorage<string>("name", "");

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};