import React, { useState } from "react";
import closeIcon from "../../assets/icons/close.png";

import Button from "../Button/Button";

function UploadNewLogForm() {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getImages = (images) => {
    setImages(images);
  };
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
    setImages([...images, ...filteredFiles]);
  };
  const removeImage = (image) => {
    setImages(images.filter((img) => img !== image));
  };

  //send images to server


  return (
    <div
      id="create-new-post"
      className="absolute bg-darkest-green w-full py-10 left-0 top-0 flex items-center justify-center"
    >
      <img
        src={closeIcon}
        alt="Close Pop-up and go back"
        className="absolute w-10 h-10 right-10 top-10"
      />
      <div className="bg-light-green rounded-xl w-[80vw] min-h-[80vh] p-8 md:p-20 flex flex-col items-center gap-10">
        <h1 className="font-semibold text-left text-3xl md:text-5xl w-full">
          Create Post
        </h1>

        <form className="mx-0 my-[5%] w-full flex flex-col md:flex-col">
          <label
            htmlFor="tree-name"
            className="block w-full md:text-base mb-6 font-medium"
          >
            Title
            <input
              id="title-name"
              type="text"
              className="form-input input-style"
            />
          </label>
          <label
            htmlFor="description"
            className="flex flex-col w-full md:text-base mb-6"
          >
            <span className="mb-3 font-medium">Description</span>
            <textarea
              id="description"
              type="text"
              className="form-textarea bg-beige border-none rounded-sm min-h-36"
            ></textarea>
          </label>

          <div className="w-full flex flex-col-reverse sm:flex-row-reverse justify-between items-center mt-0">
            <Button
              text="Create"
              className="w-2/5 md:w-[40%]"
              //   onClick={handleSubmit}
            />

            <div className="flex items-center gap-3">
              <label className="bg-beige rounded-5xl w-14 h-14 md:w-20 md:h-20 flex flex-col justify-center items-center p-4 cursor-pointer mt-0 md:mt-0">
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0001 29.5834C14.3167 29.5834 13.7501 29.0167 13.7501 28.3334V21.35L12.5501 22.55C12.0667 23.0334 11.2667 23.0334 10.7834 22.55C10.3001 22.0667 10.3001 21.2667 10.7834 20.7834L14.1167 17.45C14.4667 17.1 15.0167 16.9834 15.4834 17.1834C15.9501 17.3667 16.2501 17.8334 16.2501 18.3334V28.3334C16.2501 29.0167 15.6834 29.5834 15.0001 29.5834Z"
                      fill="#E28B00"
                    />
                    <path
                      d="M18.3336 22.9167C18.0169 22.9167 17.7002 22.8 17.4502 22.55L14.1169 19.2167C13.6336 18.7334 13.6336 17.9334 14.1169 17.45C14.6002 16.9667 15.4002 16.9667 15.8836 17.45L19.2169 20.7834C19.7002 21.2667 19.7002 22.0667 19.2169 22.55C18.9669 22.8 18.6502 22.9167 18.3336 22.9167Z"
                      fill="#E28B00"
                    />
                    <path
                      d="M25.0002 37.9166H15.0002C5.95016 37.9166 2.0835 34.05 2.0835 25V15C2.0835 5.94998 5.95016 2.08331 15.0002 2.08331H23.3335C24.0168 2.08331 24.5835 2.64998 24.5835 3.33331C24.5835 4.01665 24.0168 4.58331 23.3335 4.58331H15.0002C7.31683 4.58331 4.5835 7.31665 4.5835 15V25C4.5835 32.6833 7.31683 35.4166 15.0002 35.4166H25.0002C32.6835 35.4166 35.4168 32.6833 35.4168 25V16.6666C35.4168 15.9833 35.9835 15.4166 36.6668 15.4166C37.3502 15.4166 37.9168 15.9833 37.9168 16.6666V25C37.9168 34.05 34.0502 37.9166 25.0002 37.9166Z"
                      fill="#E28B00"
                    />
                    <path
                      d="M36.6668 17.9167H30.0002C24.3002 17.9167 22.0835 15.7 22.0835 10V3.33336C22.0835 2.83336 22.3835 2.36669 22.8502 2.18336C23.3168 1.98336 23.8502 2.10002 24.2168 2.45002L37.5502 15.7834C37.9002 16.1334 38.0168 16.6834 37.8168 17.15C37.6168 17.6167 37.1668 17.9167 36.6668 17.9167ZM24.5835 6.35002V10C24.5835 14.3 25.7002 15.4167 30.0002 15.4167H33.6502L24.5835 6.35002Z"
                      fill="#E28B00"
                    />
                  </svg>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e)}
                  multiple
                />
              </label>
              <div className="">Upload photos</div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-4 mt-6 ml-2">
            {images.map((image, index) => (
              <div className="relative" key={"image" + index}>
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadNewLogForm;
