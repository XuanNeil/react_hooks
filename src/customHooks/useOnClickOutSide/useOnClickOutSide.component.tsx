import {useRef, useState} from "react";
import {useOnClickOutSideHooks} from "src/customHooks/useOnClickOutSide";


export function UseOnClickOutSideComponent(): JSX.Element {

    const ref = useRef<HTMLDivElement>(null);
    // State for our modal
    const [isModalOpen, setModalOpen] = useState(false);
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutSideHooks(ref, () => setModalOpen(false));

    return (
        <div>
            {isModalOpen ? (
                <div ref={ref}>
                    👋 Hey, I'm a modal. Click anywhere outside of me to close.
                </div>
            ) : (
                <button onClick={() => setModalOpen(true)}>Open Modal</button>
            )}
        </div>
    );
}