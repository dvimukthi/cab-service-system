import React from "react";
import "./AdminBody.css";
import AdminMain from "./AdminMain";
import AdminSidebar from "./AdminSidebar";

function AdminBody() {
  return (
    <div>
      <AdminSidebar />
      <AdminMain />
    </div>
  );
}

export default AdminBody;
