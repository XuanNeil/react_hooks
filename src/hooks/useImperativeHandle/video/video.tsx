import React, {useEffect, useRef} from "react";
import {MyVideo} from "src/hooks/useImperativeHandle/video/components/myVideo";


export const Video = (): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        console.log(videoRef.current);
    });

    const handlePlay = () => {
        videoRef.current?.play();
    };
    const handlePause = () => {
        videoRef.current?.pause();
    };

    return (
        <>
            <MyVideo ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pasue</button>
        </>
    );
};
