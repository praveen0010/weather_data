import React from "react";

const Datas = ({ humidity, wind_speed }) => {
  return (
    <div className="datas">
      <div
        style={humidity ? { marginBottom: "30px" } : null}
        className="humadity"
      >
        {`${humidity}`}
      </div>
      <div
        style={wind_speed ? { marginBottom: "30px" } : null}
        className="windspeed"
      >
        {`${wind_speed}`}
      </div>
    </div>
  );
};

export default Datas;
