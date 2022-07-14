import React from "react";
import Container from "./Container.styled";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <section>
      <Container>
        <div className={classes.lds__center}>
          <div className={classes["lds-ring"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Loading;
