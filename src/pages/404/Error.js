import React from "react";
import "./Error.css";
import { Header, Footer } from "../../links/links";

export default function Error() {
  return (
    <>
      <div className="error">
        <Header />
        <div className="error-container">
          <h1>404 Error</h1>
          <h5>The page you are trying to access doesn't exist.</h5>
        </div>
      </div>
      <Footer />
    </>
  );
}
