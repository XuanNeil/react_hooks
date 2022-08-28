export const useScrollToSection = () => {

    // const ref = useRef<HTMLElement>(null);

    /*eslint-disable @typescript-eslint/no-explicit-any*/
    const scrollDown = (ref: any) => {
        window.scrollTo({
            top: ref.current?.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        scrollDown
    );
};