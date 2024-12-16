import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import Cart from "./components/Cart";
import CreateForm from "./components/forms/CreateForm";

function Car() {
  return (
    <Router>
      <div className="w-full h-auto min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-start">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Cars</h1>

        {/* Enlaces de navegación */}
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          <Link to="/create" className="text-blue-500 hover:text-blue-700">Create Car</Link>
          <Link to="/cart" className="text-blue-500 hover:text-blue-700">View Cart</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Car;
