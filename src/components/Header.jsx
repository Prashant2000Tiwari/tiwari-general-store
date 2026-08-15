import { useState } from "react";
import store from "../config/store";

function Header({ cartCount }) {

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          {store.name}
        </a>


        {/* Desktop / Mobile Navigation */}

        <nav
          className={
            menuOpen
              ? "nav-menu active"
              : "nav-menu"
          }
        >

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>


          <a
            href="#products"
            onClick={closeMenu}
          >
            Products
          </a>


          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>


          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>


          <a
            href="#order"
            className="order-link"
            onClick={closeMenu}
          >

            🛒 My Order

            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}

          </a>

        </nav>


        {/* Mobile Menu Button */}

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </header>
  );
}

export default Header;