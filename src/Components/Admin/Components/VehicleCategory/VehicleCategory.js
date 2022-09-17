import React from "react";
import AddCategory from "./AddCetegory";
import "./VehicleCategory.css";
import VehicleCategoryTables from "./VehicleCategoryTables";

function VehicleCategory() {
  return (
    <div className="VehiclesCategoryMain__Container">
      <div className="VehiclesCategory__Container">
        <h2>Add Vehicle Category</h2>
        <AddCategory />
      </div>
      <VehicleCategoryTables />
    </div>
  );
}

export default VehicleCategory;
