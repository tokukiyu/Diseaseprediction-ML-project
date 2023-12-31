/* eslint-disable no-unused-vars */
import { useState } from "react";
import Symptom from "./symptoms/symptoms";
const Header = () => {
  const [imagesVisible, setImagesVisible] = useState(false);

  const handleButtonClick = () => {
    setImagesVisible(true);
  };
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col items-center w-3/4 py-40 px-8 border border-sky-500">
        <p className=" text-4xl">
          Lorem ipsum dolor sit amet consectetur vel nemo ratione animi numquam
          ut veritatis beatae.
        </p>
        <butto
          onClick={handleButtonClick}
          className="my-4 mx-auto bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Prediction
        </butto>
      </div>
    </div>
  );
};

export default Header;
