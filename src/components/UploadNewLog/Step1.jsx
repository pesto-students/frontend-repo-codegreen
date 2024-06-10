import React from "react";
import uploadImageIcon from "../../assets/icons/uploadImageIcon.png";
import Button from "../Button/Button";

function Step1(props) {
  return (
    <>
      <h1 className="font-semibold text-left text-3xl md:text-5xl w-full">
        Upload Photo
      </h1>

      <div
        id="upload-button"
        className="bg-beige rounded-xl w-full flex flex-col justify-center items-center p-4"
      >
        <img src={uploadImageIcon} alt="" className="w-20 h-20" />

        <span>or drag and drop</span>
        <span>(Max File size : 5 MB)</span>
      </div>

      <Button text="Next" className="self-end" onClick={props.onNextClick}>
        Next
      </Button>
    </>
  );
}

export default Step1;
