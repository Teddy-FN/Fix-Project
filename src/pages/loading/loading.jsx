import React from "react";
import { Container, Spinner } from "reactstrap";
const Loading = () => {
  return (
    <Container style={{ height: "100vh", margin: "10% auto" }}>
        <div style={{ width: "34px", margin: " auto", color: '#28df99' }}>
          <Spinner
            style={{ width: "4rem", height: "4rem" }}
            size="lg"
            color="#28df99"
          />
        </div>
        <br />
        <h3 style={{ textAlign: "center" }}>Please Wait...</h3>
    </Container>
  );
};

export default Loading;
