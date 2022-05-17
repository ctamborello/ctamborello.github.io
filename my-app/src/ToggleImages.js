import React from "react";
import Active from "./earth.jpg";
import Inactive from "./blank.jpg";
import "./App.css";

function ToggleImages({ active, handleChangeActive }) {
  return (
    <>
      <h1 data-testid="imageToggle">Toggle Image Between Earth and Sapce!</h1>
      <div className="toggle-wrapper">
        {active ? (
          <img
            className="active"
            src={Active}
            alt="earth"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="inactive"
            src={Inactive}
            alt="blank"
            onClick={() => handleChangeActive()}
          />
        )}
      </div>
    </>
  );
}

export default ToggleImages;