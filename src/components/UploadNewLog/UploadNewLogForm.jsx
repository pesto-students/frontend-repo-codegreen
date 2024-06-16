import React, { useState } from "react";
import closeIcon from "../../assets/icons/close.png";

import Step1 from "./Step1";
import Step2 from "./Step2";


function UploadNewLogForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState({});

  const getImages = (images) => {
    setCurrentStep(2);
    setImages(images);
    console.log(images);
  };

  const getDetails = (details) => {
    setDetails(details);
    sendDataToServer();
  };

  //send images and details combined to server
  const sendDataToServer = () => {
    const formData = new FormData();
    formData.append("images", images);
    formData.append("details", JSON.stringify(details)); 
    // Make an API call to send the data to the server
    // Example using fetch:
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the server
        console.log(result);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error);
      });
  };

  return (
    <div
      id="upload-new-log"
      className="absolute bg-darkest-green w-full py-10 left-0 top-0 flex items-center justify-center"
    >
      <img
        src={closeIcon}
        alt="Close Pop-up and go back"
        className="absolute w-10 h-10 right-10 top-10"
      />
      <div className="bg-light-green rounded-xl w-[80vw] min-h-[80vh] p-8 md:p-20 flex flex-col items-center gap-10 ">
        <div
          id="steps-indicator"
          className="flex gap-3 w-full md:w-[60%] justify-center items-center"
        >
          <div
            className={`rounded-full text-center leading-8 w-8 h-8 ${
              currentStep === 1 ? "text-white" : "text-dark-green"
            } ${currentStep === 1 ? "bg-orange" : "bg-white"}`}
          >
            1
          </div>
          <div
            id="progress-bar"
            className={`bg-white w-[60%] h-2 rounded-md flex flex-row justify-${
              currentStep === 1 ? "start" : "end"
            }`}
          >
            <div
              id="progress"
              className="w-[50%] h-2 bg-orange rounded-md"
            ></div>
          </div>
          <div
            className={`rounded-full text-center leading-8 w-8 h-8 ${
              currentStep === 2 ? "text-white" : "text-dark-green"
            } ${currentStep === 2 ? "bg-orange" : "bg-white"}`}
          >
            2
          </div>
        </div>

        {currentStep === 1 ? (
          <Step1 onNextClick={getImages} />
        ) : (
          <Step2 onDetailsSubmit={getDetails} onBackPress={() => setCurrentStep(1)}/>
        )}
      </div>
    </div>
  );
}

export default UploadNewLogForm;
