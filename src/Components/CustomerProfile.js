import React from "react";
import CustomerBody from "./CustomerProfile/CustomerBody";
import CustomerHeader from "./CustomerProfile/CustomerHeader";
import { useSearchParams } from "react-router-dom";

function CustomerProfile() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <CustomerHeader />
      <CustomerBody
        customerId={searchParams.get("cid")}
        bookingId={searchParams.get("bid")}
      />
    </div>
  );
}

export default CustomerProfile;
