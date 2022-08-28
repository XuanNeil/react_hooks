import {useEffect, useState} from "react";


export const useScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

    useEffect(() => {
        const handleScrollToTop = () => {
            if (window.scrollY >= 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
            //===
            // setShowTopBtn(window.scrollY >= 200);
        };

        window.addEventListener("scroll", handleScrollToTop);
        return () => window.removeEventListener("scroll", handleScrollToTop);
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return {
        showTopBtn,
        goToTop
    };
};