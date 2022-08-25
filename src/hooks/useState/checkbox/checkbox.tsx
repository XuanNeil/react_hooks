import {useState} from "react";

const listCheckbox = [
    {id: 1, title: "Checkbox1"},
    {id: 2, title: "Checkbox2"},
    {id: 3, title: "Checkbox3"},
    {id: 4, title: "Checkbox4"},
];

export const CheckboxButton = () => {

    const [listId, setListId] = useState<number[]>([]);
    console.log(listId);

    const handleChange = (id: number) => {
        // setListId(prev => {
        //         const isChecked = listId.includes(id); //boolean
        //         if (isChecked) { // unChecked
        //             return listId.filter(item => item !== id); //C1
        //         } else {
        //             return [
        //                 ...prev,
        //                 id
        //             ];
        //         }
        //     });

        const isChecked = listId.includes(id);
        if (isChecked)// un checked
            setListId(listId.filter(item => item !== id));
        else setListId(prevState => [...prevState, id]);
    };

    const handleCheckAll = () => {
        const isChecked = listId.length === listCheckbox.length;
        const newId = listCheckbox.map(item => item.id);

        if (isChecked) setListId([]);
        else setListId(newId);
    };

    return (
        <div>
            <div>
                <input type={!(listCheckbox.length === listId.length) && listId.some(Boolean) ? "radio" : "checkbox"} checked={listCheckbox.length === listId.length} onChange={handleCheckAll}/>
                Select all.
            </div>
            {listCheckbox.map(({id, title}) => (
                <div key={id} style={{marginLeft: "10px"}}>
                    <input
                        type={"checkbox"}
                        checked={listId?.includes(id)}
                        onChange={() => handleChange(id)}
                    />{title}
                </div>
            ))}
        </div>
    );
};