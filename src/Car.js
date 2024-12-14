import Card from "./components/Card";
import CreateForm from "./components/forms/CreateForm";

function Car() {
  return (
    <div className="w-full h-screen bg-gray-100 p-2 m-2 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Cars
      </h1>
      <CreateForm />
      <Card />
    </div>
  );
}

export default Car;
