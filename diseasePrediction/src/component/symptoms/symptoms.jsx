/* eslint-disable react/display-name */
// /* eslint-disable no-unused-vars */
// // Symptoms.js
// import symptonmsData from "./data"; // Adjust the path based on the actual location of your data.js file

// const Symptoms = () => {
//   return (
//     <div>
//       <div className="sm:grid gap-8 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 m-4">
//         {symptonmsData.map((disease) => (
//           <div key={disease.id} className="p-4  bg-blue-100 text-sm shadow-md">
//             <img
//               src={disease.image}
//               alt={disease.name}
//               className="w-full h-24 object-cover mb-2"
//             />
//             <p>{disease.name}</p>
//           </div>
//         ))}
//       </div>
//       <div className="m-4">Symptoms</div>
//     </div>
//   );
// };
// export default Symptoms;

import { useState } from "react";
import Select from "react-select";
import { diseaseOptions } from "./data";

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
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

export default () => {
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

  return (
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
  );
};
