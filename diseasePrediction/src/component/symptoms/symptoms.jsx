// Symptoms.js
import symptonmsData from "./data"; // Adjust the path based on the actual location of your data.js file

const Symptoms = () => {
  return (
    <div>
      <div className="sm:grid gap-8 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 m-4">
        {symptonmsData.map((disease) => (
          <div key={disease.id} className="p-4  bg-blue-100 text-sm shadow-md">
            <img
              src={disease.image}
              alt={disease.name}
              className="w-full h-24 object-cover mb-2"
            />
            <p>{disease.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Symptoms;
