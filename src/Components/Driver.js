import React from "react";
import { useParams } from "react-router";
import DriverBody from "./Driver/DriverBody";

function Driver() {
  let { id } = useParams();
  return (
    <div>
      <DriverBody userId={id} />
    </div>
  );
}

export default Driver;
