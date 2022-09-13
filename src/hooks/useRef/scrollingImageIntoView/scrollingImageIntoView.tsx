import {useRef} from "react";

export function ScrollingImageIntoView() {
    const listRef = useRef<HTMLUListElement>(null);

    function scrollToIndex(index: number) {
        const listNode = listRef.current;
        // This line assumes a particular DOM structure:
        if (listNode) {
            const imgNode = listNode.querySelectorAll("li > img")[index];
            imgNode.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToIndex(0)}>
                    Tom
                </button>
                <button onClick={() => scrollToIndex(1)}>
                    Maru
                </button>
                <button onClick={() => scrollToIndex(2)}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul ref={listRef}>
                    <li>
                        <img
                            src="https://placekitten.com/g/200/200"
                            alt="Tom"
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/300/200"
                            alt="Maru"
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/250/200"
                            alt="Jellylorum"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}
