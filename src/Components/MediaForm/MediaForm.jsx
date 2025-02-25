import styles from "./MediaForm.module.css";
import AddImg from "../../src/Images/AddImage.png";
import { useState } from "react";

function MediaForm() {
  const [files, setFiles] = useState({
    claimsFile: null,
    ingredientsFile: null
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    setFiles(prev => ({ ...prev, [type]: file }));
  };

  const handleUpload = (type) => {
    if (!files[type]) {
      alert(`Select an Image containing ${type === 'claimsFile' ? 'Claims' : 'Ingredients'}`);
      return;
    }
    console.log(`${type} uploaded`);
  };

  const renderUploader = (type, label) => (
    <div className={`flexCol ${styles.MediaUploader}`}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFileChange(e, type)}
        id={styles[`${type}Input`]}
        style={{ display: 'none' }}
      />

      <label
        htmlFor={styles[`${type}Input`]}
        className={styles.EnterImgInput}
      >
        <img src={AddImg} className={styles.AddImg} alt="Add" />
        {files[type] ? files[type].name : `Choose ${label} File`}
      </label>

      <button
        className={`button ${styles.uploadBtn}`}
        onClick={() => handleUpload(type)}
      >
        {files[type] ? "Uploaded" : `Upload ${label}`}
      </button>
    </div>
  );

  return (
    <div className={styles.formContainer}>

        <h1> Upload Images And Analyze</h1>
      <div className={`flexCol ${styles.ImageForm}`}>
        <div className={styles.ImageUploadBox}>
          {renderUploader("claimsFile", "Claims")}
          {renderUploader("ingredientsFile", "Ingredients")}
        </div>

        <button className={`button ${styles.ImgAnalyzebtn}`}>
          Analyze
        </button>
      </div>
    </div>
  );
}

export default MediaForm;
