/*eslint-disable @typescript-eslint/no-explicit-any*/
import {useEffect, useState} from "react";

export function useTitle(initialTitle?: any) {

    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        document.title = title;
    }, [title]);


    return [title, setTitle];
}