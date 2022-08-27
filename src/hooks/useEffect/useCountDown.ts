import {useEffect, useState} from "react";

interface ICountDownProps {
    count?: number;
}

export const useCountDown = (props?: ICountDownProps): number => {
    const [countDown, setCountDown] = useState<number>(props?.count ?? 10);

    useEffect(() => {
        const timeId = setInterval(() => {
            setCountDown((prevCount) => {
                if (prevCount === 0) return 0;
                else return prevCount - 1;
            });
        }, 1000);
        return () => clearInterval(timeId);
    });

    return countDown;
};