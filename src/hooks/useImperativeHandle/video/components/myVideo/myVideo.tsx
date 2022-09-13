import React, {forwardRef, useImperativeHandle, useRef} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import videoDemo from "../../components/video_demo.mp4";

export const MyVideo = forwardRef((props, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current?.play();
        },
        pause() {
            videoRef.current?.pause();
        }
    }));

    return (
        <video
            ref={videoRef}
            width="420"
            height="345"
            src={videoDemo}
            {...props}
        >
        </video>
    );
});
