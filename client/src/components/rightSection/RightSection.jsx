import React, { useState } from "react";
import styles from "./rightSection.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import qrCodeImg from "../../assets/qrCode.png";

const SubField = () => {
  return <div className={styles.subField}>div</div>;
};

function RightSection() {
  const [subFieldName, setSubFieldName] = useState("");

  const showField = (e) => {
    console.log("dataset", e.target.dataset.name);
    setSubFieldName(e.target.dataset.name);
  };

  const hideField = () => {
    setSubFieldName("");
  };

  return (
    <div className={styles.rightSideContainer}>
      <div className={styles.rightTopSection}>
        <img src={qrCodeImg} alt="qrCodeImg" className={styles.img} />
      </div>
      <div className={styles.rightBottomSection}>
        <div className={styles.customize}>
          Customize QR code
          <MdOutlineDashboardCustomize className={styles.icon} />
        </div>
        <div className={styles.frames}>
          Frames
          {subFieldName === "frames" ? (
            <IoIosArrowUp
              data-name="frames"
              onClick={hideField}
              className={styles.icon}
            />
          ) : (
            <IoIosArrowDown
              data-name="frames"
              onClick={(e) => showField(e)}
              className={styles.icon}
            />
          )}
        </div>
        {subFieldName === "frames" && <SubField />}

        <div className={styles.shapes}>
          Shapes
          {subFieldName === "shapes" ? (
            <IoIosArrowUp
              data-name="shapes"
              onClick={hideField}
              className={styles.icon}
            />
          ) : (
            <IoIosArrowDown
              data-name="shapes"
              onClick={(e) => showField(e)}
              className={styles.icon}
            />
          )}
        </div>
        {subFieldName === "shapes" && <SubField />}

        <div className={styles.logo}>
          Logo
          {subFieldName === "logo" ? (
            <IoIosArrowUp
              data-name="logo"
              onClick={hideField}
              className={styles.icon}
            />
          ) : (
            <IoIosArrowDown
              data-name="logo"
              onClick={(e) => showField(e)}
              className={styles.icon}
            />
          )}
        </div>
        {subFieldName === "logo" && <SubField />}

        <div className={styles.colors}>
          Colors
          {subFieldName === "colors" ? (
            <IoIosArrowUp
              data-name="colors"
              onClick={hideField}
              className={styles.icon}
            />
          ) : (
            <IoIosArrowDown
              data-name="colors"
              onClick={(e) => showField(e)}
              className={styles.icon}
            />
          )}
        </div>
        {subFieldName === "colors" && <SubField />}

        <div className={styles.btns}>
          <button>
            <FiDownload className={styles.icon} /> Download
          </button>
          <button>
            <FiDownload className={styles.icon} /> Print Quality
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
