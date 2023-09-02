import React from "react";

const Temperature = ({ temp, place }) => {
  return (
    <div className="temperature">
      {`${temp}`}
      <h3>{`${place}`}</h3>
    </div>
  );
};

export default Temperature;
