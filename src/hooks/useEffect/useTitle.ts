import {useEffect, useState} from "react";

interface IUseTitleProps {
    initialTitle?: string;
}

export const useTitle = (props?: IUseTitleProps) => {

    const [title, setTitle] = useState(props?.initialTitle ?? "");

    useEffect(() => {
        document.title = title;
    }, [title]);


    return {
        title,
        setTitle
    };
};