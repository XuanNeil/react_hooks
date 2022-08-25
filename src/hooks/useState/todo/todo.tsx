import {useState} from "react";
import TodoForm, {IFormValue} from "src/hooks/useState/todo/components/todoForm";
import {ToDoList} from "src/hooks/useState/todo/components/todoList";

interface ITodoList {
    id: string,
    title?: string
}

const todos = [
    {id: "1", title: "Todo 1"},
    {id: "2", title: "Todo 2"},
    {id: "3", title: "Todo 3"},
    {id: "4", title: "Todo 4"},
];

export const Todo = (): JSX.Element => {

    const [listTodo, setListTodo] = useState<ITodoList[]>(todos);


    const handleSubmit = (formValue?: IFormValue) => {
        const newTodo = {
            id: `${todos.length + 1}`,
            title: formValue?.title
        };
        const newTodoList = [...listTodo];
        newTodoList.push(newTodo);
        setListTodo(newTodoList);
    };

    const handleDelete = (todo: ITodoList) => {
        const currentIndex = listTodo.findIndex((item) => item.id === todo.id);
        if (currentIndex == -1) return;
        const newTodo = [...listTodo];
        newTodo.splice(currentIndex, 1);
        setListTodo(newTodo);
    };

    return (
        <>
            <TodoForm onSubmit={handleSubmit}/>
            <ToDoList todos={listTodo} onToDo={handleDelete}/>
        </>
    );
};