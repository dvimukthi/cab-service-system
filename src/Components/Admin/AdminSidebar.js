import React from "react";
import "./AdminSidebar.css";
import AdminImg from "../../Assets/admin.png";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { List, ListItem, ListItemText } from "@mui/material";
// import { Link } from "react-router-dom";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router";

function AdminSidebar() {
  const navigate = useNavigate();
  function logOut() {
    navigate("/signin");
  }

  return (
    <div className="Sidebar__Container">
      <h2>GoCheeta</h2>
      {/* admin image component */}
      <div className="Profile__Container">
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
      {/* sidebar contents */}
      <div className="SidebarItems__Container">
        <List>
          <Link href="/driverlist" underline="none" color="inherit">
            <ListItem button key={"Driver List"}>
              <ListItemText primary={"Driver List"} />
            </ListItem>
          </Link>
          <Link href="/addvehicles" underline="none" color="inherit">
            <ListItem button key={"Add Vehicles"}>
              <ListItemText primary={"Add Vehicles"} />
            </ListItem>
          </Link>
          <Link href="/addvehiclecategories" underline="none" color="inherit">
            <ListItem button key={"Add Vehicle Category"}>
              <ListItemText primary={"Add Vehicle Category"} />
            </ListItem>
          </Link>
          <Link href="/branches" underline="none" color="inherit">
            <ListItem button key={"Branches"}>
              <ListItemText primary={"Branches"} />
            </ListItem>
          </Link>
        </List>
      </div>

      {/* log out button */}
      <div className="LogOutBtn" onClick={logOut}>
        <ExitToAppRoundedIcon />
        Log Out
      </div>
    </div>
  );
}

export default AdminSidebar;
