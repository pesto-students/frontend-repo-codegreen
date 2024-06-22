import React, { useEffect, useState } from "react";
import UserIcon from "../../assets/icons/Avatar.svg";
import styles from "./Dashboard.module.css";
import Button from "../../components/Button/Button";
import rightArrow from "../../assets/icons/arrow-square-right.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import treeLogo from "../../assets/images/tree-logo.svg"
import api from "../../hooks/axiosConfig"
import UploadNewLogForm from "../../components/UploadNewLog/UploadNewLogForm";
import { useUser } from "../../store/UserContext";
function Dashboard() {
  const [saplings, setSaplings] = useState([])
  const { user, isModalOpen, setIsModalOpen, setCurrentPlant } = useUser();
  const dateoOtions = { year: 'numeric', month: 'long', day: 'numeric' };
  useEffect(() => {
    api.get('api/plantation/')
    .then(response => {
      console.log("plants data", response.data);
      setSaplings(response.data)
    })
    .catch(error => {
      console.error('There was an error!', error);
    })
  }, []
  )
  return (
    <>
    {isModalOpen ? <UploadNewLogForm /> :
    <div className="w-full h-full flex flex-col md:flex-row  md:pt-[1%]">
      <div className="flex justify-between items-center md:flex-col w-full h-auto md:h-[90vh] p-4 border-b-darkest-green border-b-2 md:w-2/6 xl:w-1/5 md:mt-6 md:mb-6 md:border-b-0 md:border-r-2 md:mr-8 md:gap:8">
        <div className="relative bg-light-green rounded-4xl w-16 h-16 md:w-36 md:h-36 md:rounded-mxxl">
          <img src={UserIcon} alt="User Icon" className="absolute top-3 w-24 h-14 md:w-36 md:h-36 " />
        </div>
        <div className={styles.usernameWrppr}>
          <div className="text-xl font-bold">{user?.firstName}</div>
        </div>
        <div>
          <button text="100 Coins" className={styles.coinsBtn}>
            {user?.points } coins
          </button>
        </div>
        <img src={treeLogo} alt="tree-logo" className="hidden md:block md:basis-1/2" />
      </div>
      <div className="w-full">
        <div>
          <p className={styles.greetingTxt}>
            Hey {user?.firstName}, good to have you back!
          </p>
        </div>
        <div className={styles.addNewBtnSection}>
          <Button
            className={styles.addSapplingBtn}
            text="Add new sapling log"
            icon={rightArrow}
            isFullWidth={true}
            onClick={() => {
              setIsModalOpen(true)
            }}
          />
        </div>
        <div className={styles.saplingsSection}>
          <div className={styles.greetingTxt}>Your previous sapling logs</div>
          <div className="flex flex-col md:grid grid-cols-2 gap-4 mt-4">
            {saplings.map((sapling, index) => {
              return (
                <div className="bg-light-green relative rounded-tr-4xl rounded-bl-4xl flex flex-row justify-center mb-2 md:mb-6" key={index}>
                  {/* <div className="absolute top-[-15px] bg-dark-green text-white font-semibold text-sm rounded-3xl pl-3 pr-3 pt-2 pb-2 md:text-base">{sapling.status}</div> */}
                  <img src={sapling?.cloudinaryUrls[0]} className="w-2/6 h-6/6 md:h-4/6 rounded-lg m-3 mb-6 ml-6 md:mb-3 mt-8" />
                  <div className="flex flex-col mt-4 ml-4 mr-6">
                    <div className={styles.spName}>{sapling?.treeName}</div>
                    <div className={styles.spDate}>Date : { new Date(sapling?.plantationDate).toLocaleDateString('en-GB', dateoOtions)}</div>
                    <div className={styles.spLocation}>
                      Location : {sapling.location}
                    </div>
                    <div >
                    <button
                        className={styles.addUpBtn}
                        style={{
                          color: "auto",
                          backgroundColor:"#e48c3c",
                        }}
                        onClick={() => {setIsModalOpen(true); setCurrentPlant(sapling)}}
                      >
                        Add update {editIcon  && <img src={editIcon} />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Dashboard;
