import React from "react";

import DisplayInformation from "./DisplayInformation";
import detailInfo from "./detailInfo";
import { BAR } from "../utils/constant";
import "./information.css";

const Information = () => {
  return (
    <div className="root-container">
      <DisplayInformation detailInfo={detailInfo} />
      <div className="footer-bar">
        <div>
          <p className="book-title">
            <span style={{ fontSize: 30, fontWeight: "bold" }}>
              The Book of
            </span>{" "}
            <br></br> <span className="bold-word">BRILLIANCE</span>
          </p>
        </div>
        <div className="bar-image">
          <img src={BAR} alt="bar" />
        </div>
      </div>
    </div>
  );
};

export default Information;
