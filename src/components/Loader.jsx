import React from "react";
import { Spinner } from "reactstrap";

function Loader() {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center p-5 mt-5">
      <Spinner
        style={{ width: "5rem", height: "5rem" }}
        className="m-4"
        color="primary"
      />
      <h3>Loading old tasks ...</h3>
    </div>
  );
}

export { Loader };
