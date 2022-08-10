import React from "react";
import "./AdminSidebar.css";
import AdminImg from "../../Assets/admin.png";

function AdminSidebar() {
  return (
    <div className="Sidebar__Container">
      <div className="Profile__Container">
        <h2>GoCheeta</h2>
        <img
          src={AdminImg}
          alt=""
          width="90"
          height="90"
          style={{
            // background: "#d9ffe6",
            marginTop: "10px",
            borderRadius: "50%",
            border: "2px solid",
            boxShadow: "0 1px 3px rgb(0 0 0 / 20%), 0 1px 3px rgb(0 0 0 / 30%)",
          }}
        />
        <h3>Admin</h3>
      </div>
    </div>
  );
}

export default AdminSidebar;
