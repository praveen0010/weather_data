import React from "react";

const Icon = ({ icon, description }) => {
  return (
    <div className="icondiv">
      {icon ? (
        <img
          className="icon"
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt=" "
        />
      ) : null}
      <p>{`${description}`}</p>
    </div>
  );
};

export default Icon;
