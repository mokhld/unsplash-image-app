import React from "react";

// TYPES
import { PopupType } from "../types";

const PopUp: React.FC<PopupType> = ({ picture, setOpen }) => {
  return (
    <div className="pop-up-container">
      <div className="inner-pop-up">
        <div className="pop-up-header">
          <svg
            onClick={() => {
              setOpen("");
              document.body.style.overflow = "auto";
            }}
            className="pointer"
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            width="19.282"
            height="19.304"
            viewBox="0 0 19.282 19.304"
          >
            <g id="Layer_1" data-name="Layer 1">
              <path
                id="Path_741"
                data-name="Path 741"
                d="M7.63,9.63a5.136,5.136,0,0,1-.468-.357Q3.846,5.963.536,2.647c-.7-.7-.7-1.195-.007-1.9L.709.558c.725-.735,1.245-.74,1.968-.017q3.3,3.3,6.594,6.6c.111.111.2.242.334.4.154-.147.266-.249.373-.357Q13.292,3.87,16.6.555c.742-.743,1.25-.738,2,.021l.271.277a1.068,1.068,0,0,1-.011,1.689q-2.288,2.3-4.591,4.6c-.821.82-1.645,1.633-2.5,2.493.119.127.221.239.327.344l6.685,6.691A1.106,1.106,0,0,1,18.8,18.5c-1.043,1.067-1.362,1.069-2.417.014q-3.191-3.193-6.379-6.387a3.081,3.081,0,0,1-.29-.4c-.2.183-.31.285-.42.394L2.643,18.772c-.7.7-1.2.688-1.9-.017L.65,18.664c-.867-.882-.867-1.277,0-2.149q3.252-3.253,6.506-6.5C7.267,9.9,7.4,9.815,7.63,9.63Z"
                transform="translate(0 -0.002)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <div className="pop-up-body">
          <img src={picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
