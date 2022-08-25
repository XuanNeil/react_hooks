import React from "react";

interface ITodo {
    id: string,
    title?: string
}

interface ITodoListProps {
    todos: ITodo[],
    onToDo?: (todo: ITodo) => void;
}

export const ToDoList: React.FC<ITodoListProps> = ({
                                                       todos, onToDo = () => {
    }
                                                   }): JSX.Element => {

    const handleClick = (todo: ITodo) => {
        onToDo(todo);
    };

    return (
        <ul>
            {
                todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => handleClick(todo)}>
                        {todo.title}
                    </li>
                ))
            }
        </ul>
    );
};