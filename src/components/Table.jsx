import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { getUsers } from "../api/userApi";

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md">
      <table>
        <thead>
          <tr>
            <th></th> {/* Checkbox Column */}
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Location</th>
            <th>Joined</th>
            <th>Permissions</th>
            <th></th> {/* Actions */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>10</button>
      </div>
    </div>
  );
};

export default Table;
