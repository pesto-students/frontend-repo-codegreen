import React from "react";
import UserIcon from "../../assets/icons/Avatar.svg";
import styles from "./Dashboard.module.css";
import Button from "../../components/Button/Button";
import rightArrow from "../../assets/icons/arrow-square-right.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import treeLogo from "../../assets/images/tree-logo.svg"
function Dashboard() {
  const saplings = [
    {
      status: "First Leaves",
      imgSrc:
        "https://t4.ftcdn.net/jpg/02/16/59/19/360_F_216591900_ekerlUck717W1VHl2gbnuiSUDyuoUtTz.jpg",
      name: "Neem",
      date: Date.now(),
      location: "Pune, India",
    },
    {
      status: "First Leaves",
      imgSrc:
        "https://t4.ftcdn.net/jpg/02/16/59/19/360_F_216591900_ekerlUck717W1VHl2gbnuiSUDyuoUtTz.jpg",
      name: "Neem",
      date: Date.now(),
      location: "Pune, India",
    },
    {
      status: "First Leaves",
      imgSrc:
        "https://t4.ftcdn.net/jpg/02/16/59/19/360_F_216591900_ekerlUck717W1VHl2gbnuiSUDyuoUtTz.jpg",
      name: "Neem",
      date: Date.now(),
      location: "Pune, India",
    },
    {
      status: "First Leaves",
      imgSrc:
        "https://t4.ftcdn.net/jpg/02/16/59/19/360_F_216591900_ekerlUck717W1VHl2gbnuiSUDyuoUtTz.jpg",
      name: "Neem",
      date: Date.now(),
      location: "Pune, India",
    },
  ];
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.profileSection}>
        <div className={styles.userProfile}>
          <img src={UserIcon} alt="User Icon" className={styles.userIcon} />
        </div>
        <div className={styles.usernameWrppr}>
          <div className={styles.userName}>John</div>
          <div className={styles.usEditTxt} >Edit Profile</div>
        </div>
        <div>
          <button text="100 Coins" className={styles.coinsBtn}>
            100 Coins
          </button>
        </div>
        <img src={treeLogo} alt="tree-logo" className={styles.treeImg} />
      </div>
      <div className={styles.dashWrapper}>
        <div>
          <p className={styles.greetingTxt}>
            Hey [Username], good to have you back!
          </p>
        </div>
        <div className={styles.addNewBtnSection}>
          <Button
            className={styles.addSapplingBtn}
            text="Add new sappling log"
            icon={rightArrow}
            isFullWidth={true}
          />
        </div>
        <div className={styles.saplingsSection}>
          <div className={styles.greetingTxt}>Your previous sapling logs</div>
          <div className={styles.saplingsWrapper}>
            {saplings.map((sapling) => {
              return (
                <div className={styles.spBox}>
                  <div className={styles.spStatus}>{sapling.status}</div>
                  <img src={sapling.imgSrc} className={styles.spImg} />
                  <div className={styles.spInfo}>
                    <div className={styles.spName}>{sapling.name}</div>
                    <div className={styles.spDate}>Date : {sapling.date}</div>
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
                        onClick={() => console.log("clicked")}
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
    </div>
  );
}

export default Dashboard;
