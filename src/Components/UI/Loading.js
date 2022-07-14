import React from "react";
import Container from "./Container.styled";
import "./Loading.css";

const Loading = () => {
  return (
    <section>
      <Container>
        <div className="lds__center">
          <div className="lds-ring">
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
