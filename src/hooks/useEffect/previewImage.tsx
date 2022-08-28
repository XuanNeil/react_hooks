import React, {useRef, useState} from "react";


const defaultImage = "https://picsum.photos/200/300?random=1";

export const PreviewImage = () => {

    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const render = new FileReader();
            // render.addEventListener("load", ()=> {
            //     setImageData(render.result);
            // });
            //===
            render.onloadend = () => setPreview(render.result);
            render.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div>
            <img src={preview as string || defaultImage} alt={"image"}/>
            <button onClick={handleInputClick}>Upload</button>

            <input style={{display: "none"}} ref={fileInputRef} accept={"image/*"} type={"file"} onChange={handleImageChange}/>
        </div>
    );
};