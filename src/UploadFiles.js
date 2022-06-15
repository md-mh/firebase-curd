import "./App.css";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function UploadFiles() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);

  const UploadImage = () => {
    if (fileUpload == null) return;

    const fn = fileUpload.name.split(".")[0];
    const ext = fileUpload.name.split(".")[1];

    const pathRef = ref(storage, `files/${fn + v4() + "." + ext}`);
    uploadBytes(pathRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileUrls((prev) => [...prev, url]);
      });
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <button onClick={UploadImage}> Upload File</button>
      {fileUrls.map((url) => {
        return (
          <div>
            <p>{url}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UploadFiles;
