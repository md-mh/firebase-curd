import { useState } from "react";
import "./App.css";

function UploadDrive() {
  const [file, setFile] = useState([]);

  const driveUpload = (e) => {
    var file = e.target.files[0]; //the file
    var reader = new FileReader(); //this for convert to Base64
    reader.readAsDataURL(e.target.files[0]); //start conversion...
    reader.onload = function (e) {
      //.. once finished..
      var rawLog = reader.result.split(",")[1]; //extract only thee file data part
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      }; //preapre info to send to API
      fetch(
        "https://script.google.com/macros/s/AKfycbzB8U6Zl1pmVRZ1tl9aTGm096-QGHA451FOoKqF-0HrI5Oej-jV/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((a) => {
          console.log(a); //See response
          setFile(a);
        })
        .catch((e) => console.log(e)); // Or Error in console
    };
  };

  return (
    <div className="App">
      <input type="file" id="customFile" onChange={(e) => driveUpload(e)} />

      <img
        src={`https://drive.google.com/thumbnail?id=${file.id}`}
        alt="thumbnail Img"
      />
      <img
        src={`http://drive.google.com/uc?export=view&id=${file.id}`}
        alt="Full Img"
      />
      <p>{file.url}</p>
    </div>
  );
}

export default UploadDrive;
