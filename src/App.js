import React from "react";
import UploadImage from "./UploadImage";
import UploadFiles from "./UploadFiles";
import UploadDrive from "./UploadDrive";

const App = () => {
  return (
    <>
      <UploadImage />
      <UploadFiles />
      <UploadDrive />
    </>
  );
};

export default App;
