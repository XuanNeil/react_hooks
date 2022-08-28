import {useEffect, useState} from "react";


export const useScrollToBottom = () => {
    const [showToBtnBottom, setShowToBtnBottom] = useState<boolean>(false);

    useEffect(() => {
        const handleShowBtnBottom = () => {
            if (window.scrollY >= 200) {
                setShowToBtnBottom(true);
            } else {
                setShowToBtnBottom(false);
            }
        };

        window.addEventListener("scroll", handleShowBtnBottom);
        return () => window.removeEventListener("scroll", handleShowBtnBottom);
    }, []);


    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    };

    return {
        showToBtnBottom,
        handleScrollToBottom
    };
};