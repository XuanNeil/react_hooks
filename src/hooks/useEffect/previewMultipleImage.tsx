import React, {useEffect, useState} from "react";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const PreviewMultipleImage = () => {
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [images, setImages] = useState<string[]>([]);

    const handelChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const {files} = e.target;
            const validImageImage = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type.match(imageMimeType)) {
                    validImageImage.push(file);
                }
            }
            if (validImageImage.length) {
                setImageFiles(validImageImage);
                return;
            }
            alert("Selected images are not of valid type!");
        }
    };

    //C1
    // useEffect(() => {
    //     const images: string[] = [], fileReaders: FileReader[] = [];
    //     let isCancel = false;
    //
    //     if (imageFiles.length) {
    //         imageFiles.forEach((file) => {
    //             const fileReader = new FileReader();
    //             fileReaders.push(fileReader);
    //             fileReader.onload = (e) => {
    //                 if (e.target) {
    //                     const {result} = e.target;
    //                     if (result) {
    //                         images.push(result as string);
    //                     }
    //                     if (images.length === imageFiles.length && !isCancel) {
    //                         setImages(images);
    //                     }
    //                 }
    //             };
    //             fileReader.readAsDataURL(file);
    //         });
    //     }
    //     return () => {
    //         isCancel = true;
    //         fileReaders.forEach(fileReader => {
    //             if (fileReader.readyState === 1) {
    //                 fileReader.abort();
    //             }
    //         });
    //     };
    // }, [imageFiles]);

    // C2
    useEffect(() => {
        const fileReaders: FileReader[] = [];
        let isCancel = false;
        if (imageFiles.length) {
            const promises = imageFiles.map(file => {
                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReaders.push(fileReader);
                    fileReader.onload = (e) => {
                        if (e.target) {
                            const {result} = e.target;
                            if (result) {
                                resolve(result);
                            }
                        }
                    };
                    fileReader.onabort = () => {
                        reject(new Error("File reading aborted"));
                    };
                    fileReader.onerror = () => {
                        reject(new Error("Failed to read file"));
                    };
                    fileReader.readAsDataURL(file);
                });
            });
            Promise
                .all(promises)
                .then((images) => {
                    if (!isCancel) {
                        setImages(images as string[]);
                    }
                })
                .catch(reason => {
                    console.log(reason);
                });
        }
        return () => {
            isCancel = true;
            fileReaders.forEach(fileReader => {
                if (fileReader.readyState === 1) {
                    fileReader.abort();
                }
            });
        };
    }, [imageFiles]);

    return (
        <>
            <input multiple type={"file"} accept={"image/*"} onChange={handelChangeFile}/>
            {images?.length > 0 &&
                <div>
                    {
                        images.map((image, index) => (
                            <img key={index} src={image} alt="image"/>
                        ))
                    }
                </div>
            }
        </>
    );
};