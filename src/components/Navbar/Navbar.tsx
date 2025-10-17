import { useState } from "react";
import { NavLink } from "react-router-dom";

import UserIcon from "../../Icons/UserIcon";
import HeartIcon from "../../Icons/HeartIcon";
import CartShoppingIcon from "../../Icons/CartShoppingIcon";
import MenuIcon from "../../Icons/MenuIcon";
import Badge from "../../shared/Ui/Badge";
import CloseIcon from "../../Icons/CloseIcon";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/brands", label: "Brands" },
  { to: "/orders", label: "Orders" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <nav className="shadow-md px-4 sm:px-6 lg:px-10 bg-white relative z-50">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink
          to={"/home"}
          className="text-xl font-semibold text-gray-900 tracking-wide hover:text-cyan-400 transition"
        >
          <span className="sr-only">Home</span>
          E-Commerce
        </NavLink>

        {/* main Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-colors hover:text-cyan-400 ${
                    isActive ? "text-cyan-400" : "text-gray-900"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons + Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <UserIcon className="hidden sm:flex" />
            <div className="relative">
              <HeartIcon className="hover:text-cyan-400 transition" />
              <Badge value={1} />
            </div>
            <div className="relative">
              <CartShoppingIcon className="hover:text-cyan-400 transition" />
              <Badge value={1} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden rounded bg-gray-100 p-2 text-gray-900 hover:bg-gray-200 transition"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200 animate-slideDown">
          <ul className="flex flex-col items-center gap-4 py-6 text-base font-medium">
            {navLinks.map(({ to, label }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  onClick={handleCloseMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded transition-colors duration-200 hover:text-cyan-400 ${
                      isActive ? "text-cyan-400" : "text-gray-900"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Close button */}
          <div className="flex justify-center border-t border-gray-200 py-3">
            <button
              onClick={handleCloseMenu}
              aria-label="Close Menu"
              className="text-gray-900 hover:text-cyan-400 transition flex justify-center items-center"
            >
              <CloseIcon className="mx-0.5" />
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
