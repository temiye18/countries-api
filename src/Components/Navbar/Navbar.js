import React from "react";
import Container from "../UI/Container.styled";
import classes from "./Navbar.module.css";
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <header>
      <Container>
        <nav className={classes.navbar}>
          <h1>Where in the world?</h1>
          <button>
            <BsFillMoonFill /> Dark Mode
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
