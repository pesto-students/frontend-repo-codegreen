import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";
import api from "../../hooks/axiosConfig";
import { useUser } from "../../store/UserContext";

function Step2(props) {
  const [location, setLocation] = useState("");
  const { currentPlant } = useUser();
  const [selectedMilestones, setSelectedMilestones] = useState([]);

  useEffect(() => {
    if (currentPlant) {
      console.log("current plant", currentPlant);
      // Set initial values from currentPlant if available
      logDetails.treeName.current.value = currentPlant.treeName || "";
      // setLocation(currentPlant.location || "");
      logDetails.date.current.value = currentPlant.plantationDate
        ? new Date(currentPlant.plantationDate).toISOString().split("T")[0]
        : "";
      const milestoneIds = currentPlant.milestones.map(
        (milestone) => milestone._id
      );
      setSelectedMilestones(milestoneIds);
    }
    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      try {
        const response = await api.get(
          `/api/utils/getAddress/${latitude}/${longitude}`
        );
        const data = response.data;
        setLocation(data.address);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success);
    }
  }, []);

  const logDetails = {
    treeName: useRef(""),
    date: useRef(""),
  };

  const handleMilestoneSelection = (milestoneId) => {
    setSelectedMilestones((prev) => {
      if (prev.includes(milestoneId)) {
        return prev.filter((id) => id !== milestoneId);
      } else {
        return [...prev, milestoneId];
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const details = {
      treeName: logDetails.treeName.current.value,
      location: location,
      date: logDetails.date.current.value,
      milestones: selectedMilestones,
    };
    props.onDetailsSubmit(details);
  };
  return (
    <>
      <h1 className="font-semibold text-left text-3xl md:text-5xl w-full">
        Tell us more
      </h1>

      <form className="mx-0 my-[5%] md:my-0 w-full space-y-4 flex flex-col md:flex-row md:flex-wrap md:gap-5 items-end xl:justify-between">
        <label
          htmlFor="tree-name"
          className="block w-full md:w-[45%] xl:w-[30%] md:text-base"
        >
          Tree Name (Common or Botanical)
          <input
            id="tree-name"
            type="text"
            className="form-input input-style"
            ref={logDetails.treeName}
          />
        </label>
        <label
          htmlFor="location"
          className="block w-full md:w-[45%] xl:w-[30%] md:text-base"
        >
          Location
          <input
            id="location"
            type="text"
            className="form-input input-style"
            value={location}
            readOnly
          />
        </label>
        <label htmlFor="date" className="block w-full xl:w-[30%] md:text-base">
          Date of plantation
          <input
            id="date"
            type="date"
            className="form-input input-style"
            ref={logDetails.date}
          />
        </label>

        <fieldset className="w-full" id="milestones">
          <legend className="md:text-base mb-5">
            Select one or more Milestones
          </legend>

          <ul className="flex flex-col lg:flex-row w-full gap-6 md:grid-cols-3">
            {props.milestones.map((milestone, index) => {
              return (
                <li
                  key={`milestone-${index}`}
                  className="flex flex-row flex-wrap gap-3"
                >
                  <input
                    type="checkbox"
                    id={`milestone-${index}`}
                    value={milestone.name}
                    className="hidden"
                    required=""
                    checked={selectedMilestones.includes(milestone._id)}
                    onChange={() => handleMilestoneSelection(milestone._id)}
                  />
                  <label
                    htmlFor={`milestone-${index}`}
                    className="flex items-center justify-between  p-3 bg-dark-green text-white rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="inline">
                      <div className="w-full text-sm">{milestone.name}</div>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>

        <div className="w-full flex flex-row justify-end">
          <Button
            text="Submit"
            className="mt-8 md:w-[40%]"
            onClick={handleSubmit}
          />
        </div>

        <Button
          text="Back"
          className="mt-8 lg:w-[30%]"
          bgColor="dark-green"
          onClick={props.onBackPress}
        />
      </form>
    </>
  );
}

export default Step2;
