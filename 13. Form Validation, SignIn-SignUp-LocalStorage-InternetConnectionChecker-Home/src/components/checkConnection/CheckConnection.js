import React from "react";

// Import for online-offline detection
import { Detector } from "react-detect-offline";

const CheckConnection = (props) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div>
              <h1>No Connection</h1>
              <h4>Please check your internet connection</h4>
            </div>
          )
        }
      />
    </>
  );
};

export default CheckConnection;
