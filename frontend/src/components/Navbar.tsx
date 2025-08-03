import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-blue-600 cursor-pointer">
            <Link to="/">HealthCare</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="#doctorsList"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              All Doctors
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
