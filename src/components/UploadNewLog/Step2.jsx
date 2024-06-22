import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";

const milestones = {
  early: ["new leaves", "branching"],
  mid: ["pruning", "fertilizing", "pest control"],
  mature: ["height 4ft", "flowering", "fruiting"],
};

function Step2(props) {
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
     
      fetch(
        `/api/location?latitude=${latitude}&longitude=${longitude}`
      )
        .then(function (response) {
          setLocation(response);
        })
        .catch(function (err) {
          console.warn("Something went wrong.", err);
        });
    }
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success);
    }
  }, []);

  const [selectedMilestones, setSelectedMilestones] = useState([]);
  const logDetails = {
    treeName: useRef(""),
    location: useRef(""),
    date: useRef(""),
    postOnForum: useRef(false),
  };

  const handleMilestoneSelection = (milestone) => {
    setSelectedMilestones((prev) => {
      if (prev.includes(milestone)) {
        return prev.filter((item) => item !== milestone);
      } else {
        return [...prev, milestone];
      }
    });
  };

  const handleSubmit = () => {
    const details = {
      treeName: logDetails.treeName.current.value,
      location: logDetails.location.current.value,
      date: logDetails.date.current.value,
      postOnForum: logDetails.postOnForum.current.checked,
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
            {Object.keys(milestones).map((stage) => {
              return (
                <li key={stage} className="flex flex-row flex-wrap gap-3">
                  <span className="w-full block capitalize font-semibold md:text-base">
                    {stage}
                  </span>

                  {milestones[stage].map((milestone) => {
                    return (
                      <div key={milestone}>
                        <input
                          type="checkbox"
                          id={milestone}
                          value={milestone}
                          className="hidden"
                          required=""
                          checked={selectedMilestones.includes(milestone)}
                          onChange={() => handleMilestoneSelection(milestone)}
                        />
                        <label
                          htmlFor={milestone}
                          className="flex items-center justify-between  p-3 bg-dark-green text-white rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          <div className="inline">
                            <div className="w-full text-sm">{milestone}</div>
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </fieldset>

        <label htmlFor="post-forum" className="block w-full md:text-base">
          <input
            id="post-forum"
            type="checkbox"
            ref={logDetails.postOnForum}
            className="mr-2 rounded border-0 text-orange shadow-sm focus:border-orange focus:ring focus:ring-offset-0 focus:ring-orange focus:ring-opacity-50"
          />
          Post this Log on community forum
        </label>

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
