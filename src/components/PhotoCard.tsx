import React from "react";

// TYPES
import { PhotoCardType } from "../types";

const PhotoCard: React.FC<PhotoCardType> = ({ item, setOpen }) => {
  return (
    <div className="col pointer">
      <figure
        onClick={() => {
          setOpen(item.urls);
          document.body.style.overflow = "hidden";
        }}
      >
        <img src={item.urls} />
      </figure>
    </div>
  );
};

export default PhotoCard;
