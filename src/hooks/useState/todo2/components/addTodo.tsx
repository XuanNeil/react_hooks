import React, {useState} from "react";

interface IAddTodoProps {
    onAddTodo?: (title: string) => void;
}

export const AddTodo: React.FC<IAddTodoProps> = ({onAddTodo}): JSX.Element => {

    const [title, setTitle] = useState("");

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleAddTodo = (title: string) => {
        if (onAddTodo) onAddTodo(title);
        setTitle("");
    };

    return (
        <>
            <input
                type={"text"}
                value={title}
                onChange={handleChangeTitle}
            />
            <button onClick={() => handleAddTodo(title)}>
                Add
            </button>
        </>
    );
};