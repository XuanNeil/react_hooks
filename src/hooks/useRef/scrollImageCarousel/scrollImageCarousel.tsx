import {useRef, useState} from "react";
import {flushSync} from "react-dom";

export function ScrollImageCarousel(): JSX.Element {
    const selectedRef = useRef<HTMLLIElement>(null);
    const [index, setIndex] = useState(0);

    return (
        <>
            <nav>
                <button onClick={() => {
                    flushSync(() => {
                        if (index < catList.length - 1) {
                            setIndex(index + 1);
                        } else {
                            setIndex(0);
                        }
                    });
                    selectedRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    });
                }}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (
                        <li
                            key={cat.id}
                            ref={index === i ? selectedRef : null}
                        >
                            <img
                                style={{marginTop: "80px"}}
                                className={
                                    index === i ?
                                        "active"
                                        : ""
                                }
                                src={cat.imageUrl}
                                alt={"Cat #" + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

interface ICart {
    id: number,
    imageUrl: string
}

const catList: ICart[] = [];

for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: "https://placekitten.com/250/200?image=" + i
    });
}
