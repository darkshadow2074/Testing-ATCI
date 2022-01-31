import React from "react";

const DisplayInformation = ({ detailInfo }) => {
  return (
    <div className="container">
      {detailInfo.map(({ id, img, name, designation, details }) => (
        <div className="info" key={id}>
          <div className="avatarImg">
            <img src={img} alt="" className="image" />
          </div>
          <div className="avatarDetails">
            <span className="title">{name}</span>
            <span className="designation">{designation}</span>
            <p className="details">{details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayInformation;
