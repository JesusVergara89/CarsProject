import TestRequestDataComponent from "./components/TestRequestDataComponent";

function Car() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Cars
      </h1> 
      <TestRequestDataComponent/>     
    </div>
  );
}

export default Car;
