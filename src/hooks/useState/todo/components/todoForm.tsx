import React, {useState} from "react";

export interface IFormValue {
    title: string;
}

interface ITodoFormProps {
    onSubmit?: (formValue?: IFormValue) => void;
}

const TodoForm: React.FC<ITodoFormProps> = ({onSubmit}): JSX.Element => {

    const [title, setTitle] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            title,
            //...sau có trường khác thì add thêm.
        };
        onSubmit(formValues);

        //Reset value
        setTitle("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={"text"}
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter Name..."
            />
        </form>
    );
};
export default TodoForm;