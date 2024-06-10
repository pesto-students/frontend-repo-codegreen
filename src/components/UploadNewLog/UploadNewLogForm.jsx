import React, { useState } from "react";
import closeIcon from "../../assets/icons/close.png";

import Step1 from "./Step1";
import Step2 from "./Step2";

function UploadNewLogForm() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div
      id="upload-new-log"
      className="absolute bg-darkest-green w-full h-full left-0 top-0 flex items-center justify-center"
    >
      <img
        src={closeIcon}
        alt="Close Pop-up and go back"
        className="absolute w-10 h-10 right-10 top-10"
      />
      <div className="bg-light-green rounded-xl w-[80vw] h-[80vh] p-8 md:p-20 flex flex-col items-center gap-10 ">
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
          <Step1 onNextClick={() => setCurrentStep(2)} />
        ) : (
          <Step2 />
        )}
      </div>
    </div>
  );
}

export default UploadNewLogForm;
