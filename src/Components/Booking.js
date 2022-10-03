import React from "react";
import { useSearchParams } from "react-router-dom";
import BookingBody from "./BookingComponent/BookingBody/BookingBody";

function Booking() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <BookingBody customerId={searchParams.get("cid")} />
    </div>
  );
}
export default Booking;
