import React, { useState } from "react";

// TYPES
import { Photo } from "../types";

// COMPONENTS
import PhotoCard from "./PhotoCard";
import PopUp from "./Popup";
import Spinner from "./Spinner";

const Gallery: React.FC<any> = ({ loader, photo }) => {
  const [open, setOpen] = useState<string>("");

  return (
    <div className="container">
      <div className="row">
        {(loader && (
          <div className="loader">
            <Spinner />
          </div>
        )) ||
          (photo &&
            photo.map((item: Photo, i: number) => (
              <PhotoCard setOpen={setOpen} key={i} item={item} />
            )))}
      </div>

      {/* POP-UP */}
      {open && <PopUp picture={open} setOpen={setOpen} />}
    </div>
  );
};

export default Gallery;
