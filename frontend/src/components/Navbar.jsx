import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`flex items-center justify-between py-4 border-b z-[10001] transition-all duration-300 ease-in ${
      isScrolled ? "fixed bg-white shadow-md md:px-32 top-0 left-0 right-0" : ""
    }`}>
      <a href="/" className="px-2 lg:px-0 uppercase font-bold " style={{ color: "#2E4764" }}>
        Layoff Insight
      </a>
      
      <div className="sm:block hidden">
      </div>

      <ul className="md:inline-flex items-center hidden">
        <li className="px-2 md:px-4">
          <Link
            to="/"
            className="text-purple-600 font-semibold" style={{ color: "#2E4764" }}
          >
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="#"
            className="text-gray-500 font-semibold" style={{ color: "black" }}
          >
            {" "}
            About{" "}
          </a>
        </li>
        <li className="px-2 md:px-4">
          <a
            href="/dashboard/home"
            className="text-gray-500 font-semibold"  style={{ color: "black" }}
          >
            {" "}
            Dashboard{" "}
          </a>
        </li>
      </ul>

      <ul className="sm:hidden">
      <li className="px-2 md:px-4">
          <Link
            to="/"
            className="text-purple-600 font-semibold hover:text-purple-500"
          >
            <FaBars />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
