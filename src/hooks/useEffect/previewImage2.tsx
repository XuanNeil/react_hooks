import React, {useEffect, useState} from "react";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const PreviewImage2 = () => {

    const [file, setFile] = useState<File | null>(null);
    const [fileDataUrl, setFileDataUrl] = useState<string | ArrayBuffer | null>(null);

    const handelChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if (!file.type.match(imageMimeType)) {
                alert("Image mime type is not valid");
                return;
            }
            setFile(file);
        }
    };

    useEffect(() => {
        let fileReader: FileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                if (e.target) {
                    const {result} = e.target;
                    if (result && !isCancel) {
                        setFileDataUrl(result);
                    }
                }
            };
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        };
    }, [file]);

    return (
        <>
            <input type={"file"} accept={"image/*"} onChange={handelChangeFile}/>
            {fileDataUrl && <img src={fileDataUrl as string} alt={"image"}/>}
        </>
    );
};