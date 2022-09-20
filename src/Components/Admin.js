import React from "react";
import AdminBody from "./Admin/AdminBody";

function Admin({widget}) {
  return (
    <div>
      <AdminBody widget={widget}/>
    </div>
  );
}

export default Admin;
