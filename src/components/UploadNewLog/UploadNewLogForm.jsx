import React, { useState, useEffect } from "react";
import closeIcon from "../../assets/icons/close.png";
import { useUser } from "../../store/UserContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useNavigate } from "react-router-dom";
import api from "../../hooks/axiosConfig";
import Step3 from "./Step3.jsx"


function UploadNewLogForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState({});
  const { isModalOpen, setIsModalOpen, setUser, user } = useUser();
  const [milestones, setMilestones] = useState([]);
  const { currentPlant } = useUser();
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

   //send images and details combined to server
  const sendDataToServer = async (details) => {
    const formData = new FormData();
    formData.append("image", images[0]);
    formData.append("details", JSON.stringify(details)); 
    console.log("formData", images, details)

    if(currentPlant){
      try {
        const response = await api.put(
          `/api/plantation/updatePlantation/${currentPlant?._id}`, formData
        );
        if(response.status === 200){
          console.log("200 success", response.data )
          setCurrentStep(3)
          api.get(`api/user/getUser/${user._id}`)
          .then(response => {
            setUser(response.data)
          })
          .catch(error => {
            console.error('There was an error!', error);
          })

        }        
      } catch (error) {
        console.log(error.message);
      }

    }else{
      try {
        const response = await api.post(
          `/api/plantation/createNewPlantation`, formData
        );
        if(response.status === 200){
          console.log("200 success", response.data )
          setCurrentStep(3)
          api.get(`api/user/getUser/${user._id}`)
          .then(response => {
            setUser(response.data)
          })
          .catch(error => {
            console.error('There was an error!', error);
          })

        }        
      } catch (error) {
        console.log(error.message);
      }
    }
    
  };

  return (
    <div
      id="upload-new-log"
      className="absolute bg-darkest-green w-full py-10 pb-64 left-0 top-0 flex items-center justify-center"
    >
      <img
        src={closeIcon}
        alt="Close Pop-up and go back"
        className="absolute w-10 h-10 right-4 top-10 md:right-10 lg:right-22 xl:right-32"
        onClick={() => {
          setIsModalOpen(false)
        }}

      />
      <div className="bg-light-green rounded-xl w-[80vw] min-h-[80vh] p-8 md:p-20 flex flex-col items-center gap-10 ">
        {currentStep !== 3 &&
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
}
        {currentStep === 1 && (
        <Step1 onNextClick={getImages} images={images} />
      )}
      {currentStep === 2 && (
        <Step2
          onDetailsSubmit={sendDataToServer}
          onBackPress={() => setCurrentStep(1)}
          milestones={milestones}
        />
      )}
      {currentStep === 3 && <Step3 />}
      </div>
    </div>
  );
}

export default UploadNewLogForm;
