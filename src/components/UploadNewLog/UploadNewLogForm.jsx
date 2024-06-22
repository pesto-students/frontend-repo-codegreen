import React, { useState, useEffect } from "react";
import closeIcon from "../../assets/icons/close.png";
import { useUser } from "../../store/UserContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useNavigate } from "react-router-dom";
import api from "../../hooks/axiosConfig";


function UploadNewLogForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState({});
  const { isModalOpen, setIsModalOpen } = useUser();
  const [milestones, setMilestones] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
  async function getMilestones() {
    try {
      const response = await api.get(`/api/plantation/milestones`);
      const milestones = response.data;
      setMilestones(milestones);
    } catch (error) {
      navigate("/sign-in")
    }
  }
  getMilestones();

}, []);

  const getImages = (images) => {
    setCurrentStep(2);
    setImages(images);
  };

  const getDetails = (details) => {
    setDetails(details);
    sendDataToServer();
  };

  //send images and details combined to server
  const sendDataToServer = async () => {
    const formData = new FormData();
    formData.append("image", images[0]);
    formData.append("details", JSON.stringify(details)); 
    console.log("formData", images, details)
    try {
        const response = await api.post(
          `/api/plantation/createNewPlantation`, formData
        );
        if(response.status === 200){
          // console.log("200 success", response.data )
          setIsModalOpen(false)
          navigate("/dashboard");
        }        
      } catch (error) {
        console.log(error.message);
      }
  };

  return (
    <div
      id="upload-new-log"
      className="h-full absolute bg-darkest-green w-full py-10 left-0 top-0 flex items-center justify-center"
    >
      <img
        src={closeIcon}
        alt="Close Pop-up and go back"
        className="absolute w-10 h-10 right-10 top-10"
        onClick={() => {
          setIsModalOpen(false)
        }}

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
          <Step1 onNextClick={getImages} images={images}/>
        ) : (
          <Step2 onDetailsSubmit={getDetails} onBackPress={() => setCurrentStep(1)} milestones={milestones}/>
        )}
      </div>
    </div>
  );
}

export default UploadNewLogForm;
