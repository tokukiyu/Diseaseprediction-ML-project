/* eslint-disable react/display-name */
// /* eslint-disable no-unused-vars */
import { useState } from "react";
import Select from "react-select";
import { diseaseOptions } from "./data";

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
    // Do something with the selected values (e.g., submit to a prediction API)
    console.log("Selected Values:", value);
    // You can add logic here to handle the selected values, like making an API call
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
    </div>
  );
};

export default DiseaseSelector;
