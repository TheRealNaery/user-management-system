import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import UserModal from "./UserModal";

const roleColors = {
  Admin: "bg-red-500",
  Contributor: "bg-blue-500",
  Viewer: "bg-gray-500",
};

const TableRow = ({ user, refreshUsers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-700 transition">
      <td className="p-2 flex items-center">
        <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
        {user.name}
      </td>
      <td className="p-2">{user.email}</td>
      <td className="p-2">{user.location}</td>
      <td className="p-2">{user.joined}</td>
      <td className="p-2">
        <span
          className={`text-white text-sm px-2 py-1 rounded-md ${
            roleColors[user.role]
          }`}
        >
          {user.role}
        </span>
      </td>
      <td className="p-2 relative">
        <Menu as="div" className="relative inline-block">
          <Menu.Button className="text-white hover:bg-gray-600 p-1 rounded">
            <EllipsisVerticalIcon className="w-5 h-5" />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-36 bg-gray-800 text-white rounded shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`block w-full text-left px-4 py-2 ${
                    active ? "bg-gray-700" : ""
                  }`}
                  onClick={() => navigate(`/user/${user.id}/items`)}
                >
                  View Items
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`block w-full text-left px-4 py-2 ${
                    active ? "bg-gray-700" : ""
                  }`}
                  onClick={() => setIsModalOpen(true)}
                >
                  Edit User
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </td>
      {isModalOpen && (
        <UserModal
          user={user}
          closeModal={() => setIsModalOpen(false)}
          refreshUsers={refreshUsers}
        />
      )}
    </tr>
  );
};

export default TableRow;
