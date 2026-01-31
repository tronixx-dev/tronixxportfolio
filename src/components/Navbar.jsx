import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 px-6 md:px-12 flex items-center justify-between 
      bg-black/40 backdrop-blur-md border-b border-white/10 z-50">

      {/* Logo */}
      <NavLink
        to="/home"
        className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg"
      >
        TX
      </NavLink>
      
      {/* NAV LINKS */}
      <nav className="flex text-lg gap-7 font-medium">
        {[
          ["Home", "/home"],
          ["About", "/about"],
          ["Projects", "/projects"],
          ["Sign up", "/signup"],
          ["Contact us", "/contact"],
          ["Login", "/login"],
        ].map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-blue-500" : "text-white"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
