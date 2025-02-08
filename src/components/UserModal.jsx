import React from "react";
import { Dialog, Transition } from "@headlessui/react";

const UserModal = ({ isOpen, onClose, onSave, user }) => {
  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>

        <div className="bg-gray-800 p-6 rounded-md w-96 z-10 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            {user ? "Edit User" : "Add New User"}
          </h2>

          {/* Form */}
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              defaultValue={user?.name || ""}
              className="w-full p-2 bg-gray-700 text-white rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              defaultValue={user?.email || ""}
              className="w-full p-2 bg-gray-700 text-white rounded-md"
            />
            <select className="w-full p-2 bg-gray-700 text-white rounded-md">
              <option value="admin">Admin</option>
              <option value="contributor">Contributor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="bg-orange-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserModal;
