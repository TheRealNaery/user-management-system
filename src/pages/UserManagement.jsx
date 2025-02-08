import React from "react";
import FilterBar from "../components/FilterBar";
import Table from "../components/Table";

const UserManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-xl font-semibold mb-4">User Management</h1>
      <FilterBar />
      <Table />
    </div>
  );
};

export default UserManagement;
