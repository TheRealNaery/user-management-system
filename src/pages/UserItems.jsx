import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/userApi";
import { getItemsByUserId } from "../api/itemApi";

const UserItems = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchUserAndItems = async () => {
      const userData = await getUserById(id);
      setUser(userData);
      const userItems = await getItemsByUserId(id);
      setItems(userItems);
    };
    fetchUserAndItems();
  }, [id]);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      {user && (
        <h1 className="text-xl font-semibold mb-4">{user.name}'s Items</h1>
      )}
      <table className="w-full text-left bg-gray-800 p-4 rounded-md">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2">Item Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-700">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.description}</td>
              <td className="p-2">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserItems;
