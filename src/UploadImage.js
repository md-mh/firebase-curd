import "./App.css";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function UploadImage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const UploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={UploadImage}> Upload Image</button>
      {imageUrls.map((url) => {
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <img src={url} alt="upload" />
            <p>{url}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UploadImage;
