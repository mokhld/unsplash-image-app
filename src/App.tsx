import React, { useEffect, useState } from "react";

// css
import "./App.css";

// TYPES
import { Photo } from "./types";

// COMPONENTS
import Search from "./components/Search";
import Gallery from "./components/Gallery";

// SERVICE
import { gettingData } from "./service";

const App: React.FC = () => {
  // LOADER
  const [loader, setLoader] = useState<boolean>(false);

  // HANDLE INPUT
  const [inpHandle, setInpHandle] = useState<string>("");

  // API DATA
  const [photo, setPhotosResponse] = useState<Photo[]>();

  useEffect(() => {
    setLoader(true);
    gettingData("hello")
      .then((result) => {
        const filteringData = result?.response?.results.map((results) => {
          return {
            urls: results.urls.full,
          };
        });

        setPhotosResponse(filteringData);
        setLoader(false);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const searchFunction = (inpHandle: string) => {
    setLoader(true);
    gettingData(inpHandle)
      .then((result) => {
        const filteringData = result?.response?.results.map((results) => {
          return {
            urls: results.urls.full,
          };
        });

        setPhotosResponse(filteringData);
        setLoader(false);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div>
      <h1 className="main_heading">Unsplash Image Search Engine</h1>
      <Search
        inpHandle={inpHandle}
        setInpHandle={setInpHandle}
        searchFunction={searchFunction}
      />
      <Gallery loader={loader} photo={photo} />
    </div>
  );
};

export default App;
