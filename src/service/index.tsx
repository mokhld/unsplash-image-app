import { createApi } from "unsplash-js";

export const gettingData = (inpHandle: string) => {
  const key: any = process.env.REACT_APP_ACCESS_KEY;

  // API CALL WITH KEY
  const api = createApi({
    accessKey: key,
  }).search.getPhotos({
    query: (inpHandle === "" && "hello") || inpHandle,
    page: 1,
    perPage: 9,
    orientation: "landscape",
  });

  return api;
};
