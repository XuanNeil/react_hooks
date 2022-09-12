import React from "react";

interface IContentProps {
    onHandleIncrement?: () => void;
}

export const Content: React.FC<IContentProps> = React.memo(({onHandleIncrement}) => {
    console.log("content");
    return (
        <>
            <h2>Su dung useCallback</h2>
            <button onClick={onHandleIncrement}>Add</button>
        </>
    );
});