import React from "react";
import Container from "../UI/Container.styled";
import "./Navbar.css";
import { BsFillMoonFill } from "react-icons/bs";
import { useGlobalTheme } from "../store/Context";

const Navbar = () => {
  const { theme, toggleTheme } = useGlobalTheme();
  return (
    <header>
      <Container>
        <nav className="navbar">
          <h1>Where in the world?</h1>
          <button onClick={toggleTheme}>
            <BsFillMoonFill /> {theme === "light" ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
