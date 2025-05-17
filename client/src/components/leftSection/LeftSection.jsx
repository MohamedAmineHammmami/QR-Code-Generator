import React, { useEffect, useState } from "react";
import "./leftSection.css";
import { MdAddLink } from "react-icons/md";
import { BsFilePdf, BsPersonVcard } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { LiaSmsSolid } from "react-icons/lia";
import { CiWifiOn } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { BsFiletypeMp3 } from "react-icons/bs";
import { BsFiletypeMp4 } from "react-icons/bs";
import { BsFileEarmarkPdf } from "react-icons/bs";
import Email from "../forms/email/Email";
import Img from "../forms/img/Img";
import Mp3 from "../forms/mp3/Mp3";
import Mp4 from "../forms/mp4/Mp4";
import Sms from "../forms/sms/Sms";
import Text from "../forms/text/Text";
import Url from "../forms/url/Url";
import Vcard from "../forms/vcard/Vcard";
import Wifi from "../forms/wifi/Wifi";
import Pdf from "../forms/Pdf/pdf";

const forms = {
  email: <Email />,
  img: <Img />,
  mp3: <Mp3 />,
  mp4: <Mp4 />,
  pdf: <Pdf />,
  sms: <Sms />,
  text: <Text />,
  url: <Url />,
  vcard: <Vcard />,
  wifi: <Wifi />,
};

function LeftSection() {
  const [activeForm, setActiveForm] = useState("email");
  console.log("activeForm", activeForm);

  const handleToggle = (e) => {
    console.log(e.currentTarget?.dataset.name);
    setActiveForm(e.currentTarget?.dataset.name);
  };

  return (
    <div className="leftSideContainer">
      <div className="dataTypes">
        <div
          className={activeForm === "url" ? "type activeType" : "type"}
          data-name="url"
          onClick={(e) => handleToggle(e)}
        >
          <MdAddLink className="icon" />
          <span>URL</span>
        </div>
        <div
          className={activeForm === "vcard" ? "type activeType" : "type"}
          data-name="vcard"
          onClick={(e) => handleToggle(e)}
        >
          <BsPersonVcard className="icon" />
          <span>VCARD</span>
        </div>
        <div
          className={activeForm === "text" ? "type activeType" : "type"}
          data-name="text"
          onClick={(e) => handleToggle(e)}
        >
          <IoDocumentTextOutline className="icon" />
          <span>TEXT</span>
        </div>
        <div
          className={activeForm === "email" ? "type activeType" : "type"}
          data-name="email"
          onClick={(e) => handleToggle(e)}
        >
          <MdAlternateEmail className="icon" />
          <span>E-MAIL</span>
        </div>
        <div
          data-name={"sms"}
          className={activeForm === "sms" ? "type activeType" : "type"}
          onClick={(e) => handleToggle(e)}
        >
          <LiaSmsSolid className="icon" />
          <span>SMS</span>
        </div>
        <div
          className={activeForm === "wifi" ? "type activeType" : "type"}
          data-name="wifi"
          onClick={(e) => handleToggle(e)}
        >
          <CiWifiOn className="icon" />
          <span>WIFI</span>
        </div>
        <div
          className={activeForm === "img" ? "type activeType" : "type"}
          data-name="img"
          onClick={(e) => handleToggle(e)}
        >
          <CiImageOn className="icon" />
          <span>IMG</span>
        </div>
        <div
          className={activeForm === "pdf" ? "type activeType" : "type"}
          data-name="pdf"
          onClick={(e) => handleToggle(e)}
        >
          <BsFilePdf className="icon" />
          <span>PDF</span>
        </div>
        <div
          className={activeForm === "mp3" ? "type activeType" : "type"}
          data-name="mp3"
          onClick={(e) => handleToggle(e)}
        >
          <BsFiletypeMp3 className="icon" />
          <span>MP3</span>
        </div>
        <div
          className={activeForm === "mp4" ? "type activeType" : "type"}
          data-name="mp4"
          onClick={(e) => handleToggle(e)}
        >
          <BsFiletypeMp4 className="icon" />
          <span>MP4</span>
        </div>
      </div>
      {forms[activeForm] ?? <p>Select a file datatype..</p>}
    </div>
  );
}

export default LeftSection;
