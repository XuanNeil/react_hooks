import React, {useState} from "react";

interface ITodo {
    id: number,
    title: string,
    done: boolean,
}

interface ITaskTodoProps {
    todos: ITodo[],
    onChangeTodo?: (value: ITodo) => void
    onDeleteTodo?: (id: number) => void
}

export const TaskTodo: React.FC<ITaskTodoProps> = ({todos, onChangeTodo, onDeleteTodo}): JSX.Element => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
};

interface ITaskProps {
    todo: ITodo,
    onChange?: (value: ITodo) => void
    onDelete?: (id: number) => void
}

const Task: React.FC<ITaskProps> = ({
                                        todo, onChange = () => {
    }, onDelete
                                    }): JSX.Element => {

    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = (id: number) => {
        if (onDelete) {
            onDelete(id);
        }
    };

    return (
        <label>
            <input
                type={"checkbox"}
                checked={todo.done}
                onChange={(event) => onChange({
                    ...todo,
                    done: event.target.checked,
                })}
            />
            {isEditing ? (
                <>
                    <input
                        value={todo.title}
                        onChange={(event) => onChange({
                            ...todo,
                            title: event.target.value,
                        })}
                    />
                    <button onClick={() => setIsEditing(false)}>
                        Save
                    </button>
                </>
            ) : (
                <>
                    {todo.title}
                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
            <button onClick={() => handleDelete(todo.id)}>
                Delete
            </button>
        </label>
    );
};