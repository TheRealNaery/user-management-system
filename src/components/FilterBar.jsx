import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FilterBar = () => {
  const [selectedPermission, setSelectedPermission] = useState("All");
  const [selectedJoined, setSelectedJoined] = useState("Anytime");

  return (
    <div className="flex flex-col md:flex-row gap-y-3 justify-between bg-gray-800 p-3 rounded-md mb-4 shadow-md">
      <div className="flex gap-x-3">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search items..."
          className="bg-gray-700 text-white p-2 rounded-md w-1/4 outline-none placeholder-gray-400"
        />

        {/* Permissions Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="bg-gray-700 text-white px-3 py-2 rounded-md flex items-center">
            <span className="text-gray-400">Permissions: </span>
            <span className="text-orange-400 ml-1">{selectedPermission}</span>
            <ChevronDownIcon className="w-4 h-4 ml-2" />
          </Menu.Button>
          <Menu.Items className="absolute bg-gray-800 mt-2 rounded-md shadow-md w-32">
            {["All", "Admin", "Contributor", "Viewer"].map((option) => (
              <Menu.Item key={option}>
                {({ active }) => (
                  <button
                    onClick={() => setSelectedPermission(option)}
                    className={`block px-4 py-2 w-full text-left ${
                      active ? "bg-gray-700" : ""
                    }`}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>

        {/* Joined Dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="bg-gray-700 text-white px-3 py-2 rounded-md flex items-center">
            <span className="text-gray-400">Joined: </span>
            <span className="text-orange-400 ml-1">{selectedJoined}</span>
            <ChevronDownIcon className="w-4 h-4 ml-2" />
          </Menu.Button>
          <Menu.Items className="absolute bg-gray-800 mt-2 rounded-md shadow-md w-32">
            {["Anytime", "Last 7 Days", "Last 30 Days", "Last Year"].map(
              (option) => (
                <Menu.Item key={option}>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedJoined(option)}
                      className={`block px-4 py-2 w-full text-left ${
                        active ? "bg-gray-700" : ""
                      }`}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              )
            )}
          </Menu.Items>
        </Menu>
      </div>

      {/* Export & New User Buttons */}
      <div className="flex gap-x-3">
        <button className="export">Export</button>
        <button className="new-user">+ New User</button>
      </div>
    </div>
  );
};

export default FilterBar;
