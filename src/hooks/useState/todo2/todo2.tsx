import React, {useState} from "react";
import {AddTodo} from "src/hooks/useState/todo2/components/addTodo";
import {TaskTodo} from "src/hooks/useState/todo2/components/taskTodo";

interface ITodo {
    id: number,
    title: string,
    done: boolean,
}

const initialTodos: ITodo[] = [
    {id: 0, title: "No Name", done: false},
    {id: 1, title: "Ha Xuan", done: true},
    {id: 2, title: "Neil", done: true},
];

const TodoComponent = () => {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodo = (title: string) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            done: false,
        };
        setTodos([...todos, newTodo]);
    };

    const handleChangeTodo = (nextTodo: ITodo) => {
        setTodos(todos.map((t) => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        }));
    };

    const handleDeleteTodo = (todoId: number) => {
        //C1
        // const currentTodo = todos.filter((todo)=> todo.id !== todoId);
        // setTodos(currentTodo);

        //C2
        const currentIndex = todos.findIndex((todo) => todo.id === todoId);
        if (currentIndex < 0) return;
        const newTodo = [...todos];
        newTodo.splice(currentIndex, 1);
        setTodos(newTodo);
    };

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo}/>
            <TaskTodo
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
};
export default TodoComponent;