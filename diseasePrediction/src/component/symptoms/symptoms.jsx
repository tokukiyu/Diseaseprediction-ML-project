/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
// /* eslint-disable no-unused-vars */
import { useState } from "react";
import Select from "react-select";
import { diseaseOptions } from "./data";
import axios from "axios";
import BarChart from "./Barchart";
const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? {
          ...base,
          fontWeight: "bold",
          color: "red",
          paddingRight: 6,
        }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const orderOptions = (values) => {
  return values
    .filter((v) => v.isFixed)
    .concat(values.filter((v) => !v.isFixed));
};

const DiseaseSelector = () => {
  const [value, setValue] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const onChange = (newValue, actionMeta) => {
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue && actionMeta.removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        newValue = diseaseOptions.filter((v) => v.isFixed);
        break;
      default:
        break;
    }

    setValue(orderOptions(newValue));
  };

  const handlePredictClick = () => {
    // Extract selected symptoms from the value array
    const selectedSymptoms = value.map((symptom) => symptom.value);

    // Make a POST request using Axios
    axios
      .post("http://127.0.0.1:5000/predict", {
        symptoms: selectedSymptoms,
      })
      .then((response) => {
        // Handle the response from the server (e.g., display predictions)
        setDiseases(response.data);
        console.log("Prediction Result:", response.data);
        //  console.log(diseases.length);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-1/2 bg-gray-60 m-auto px-8 py-8  ">
      <Select
        value={value}
        styles={styles}
        isMulti
        isClearable={value.some((v) => !v.isFixed)}
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onChange}
        options={diseaseOptions}
      />

      <button
        onClick={handlePredictClick}
        className="my-4 bg-blue-500 text-white px-4 py-2 rounded "
      >
        Predict
      </button>

      {diseases.length > 0 && <BarChart diseases={diseases} />}
    </div>
  );
};

export default DiseaseSelector;
