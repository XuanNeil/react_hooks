import {useState} from "react";

const listRadio = [
    {id: 1, title: "Option 1"},
    {id: 2, title: "Option 2"},
    {id: 3, title: "Option 3"},
    {id: 4, title: "Option 4"},
];

export const RadioButton = () => {

    const [checked, setChecked] = useState<number>(1);

    const handleChange = (id: number) => {
        setChecked(id);
    };

    return (
        <div>
            {listRadio.map(({id, title}) => (
                <div key={id}>
                    <input
                        type={"radio"}
                        checked={checked === id}
                        onChange={() => handleChange(id)}
                    />{title}
                </div>
            ))}
        </div>
    );
};