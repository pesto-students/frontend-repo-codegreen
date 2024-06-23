import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import closeIcon from "../../assets/icons/close.png";
import { useUser } from "../../store/UserContext";

function Step1(props) {
  const [images, setImages] = useState(props.images);
  const [errorMessage, setErrorMessage] = useState("");
  const { currentPlant } = useUser();

  useEffect(() => {
    let removeErrorTimeout = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => {
      clearTimeout(removeErrorTimeout);
    };
  }, [errorMessage]);

  const handleImageUpload = (e) => {
    let files = e.target.files;
    let filteredFiles = Array.from(files).filter(
      (file) => file.size <= 2 * 1024 * 1024
    );
    if (filteredFiles.length !== files.length) {
      setErrorMessage(
        "Some files could not be loaded since they exceeded the maximum size of 2MB. Please upload files of size less than 2MB."
      );
    }
    setImages([...images,...filteredFiles]);
  };

  const removeImage = (image) => {
    setImages(images.filter((img) => img !== image));
  };

  return (
    <>
      <h1 className="font-semibold text-left text-3xl md:text-5xl w-full">
        Upload Photo
      </h1>

      <div className="flex items-center justify-center w-full ">
        <label
          htmlFor="dropzone-file"
          className="bg-beige rounded-xl w-full flex flex-col justify-center items-center p-4 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="orange"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              PNG, JPEG or JPG (Maximum 5 images of maximum size 2MB each.)
            </p>
            <p id="error" className="text-sm text-red font-semibold">
              {errorMessage}
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => handleImageUpload(e)}
            multiple
          />
        </label>
      </div>
      <div className="w-full flex flex-row gap-4 ">
        {images.map((image, index) => (
          <div className="relative" key={'image' + index}>
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Thumbnail ${index}`}
              style={{ width: "50px", height: "50px" }}
            />
            <img
              src={closeIcon}
              className="absolute -top-2 -right-2 w-5 h-5 cursor-pointer brightness-0"
              onClick={() => removeImage(image)}
            />
          </div>
        ))}
        {/* {currentPlant && <div>
          <div className="relative">
            <img
              src={currentPlant?.cloudinaryUrls[0]}
              style={{ width: "50px", height: "50px" }}
            />
            <img
              src={closeIcon}
              className="absolute -top-2 -right-2 w-5 h-5 cursor-pointer brightness-0"
              onClick={() => removeImage(currentPlant?.cloudinaryUrls[0])}
            />
          </div>
          </div>} */}
      </div>
      <Button
        text="Next"
        className="self-end md:w-[30%] disabled:opacity-60"
        onClick={() => props.onNextClick(images)}
        attributes={{ disabled: images.length === 0 }}
      >
        Next
      </Button>
    </>
  );
}

export default Step1;
