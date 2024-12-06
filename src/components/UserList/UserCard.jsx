import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-md"
      />
      <h3 className="text-center font-semibold text-lg text-gray-800">
        {user.first_name} {user.last_name}
      </h3>
      <p className="text-center text-sm text-gray-500">{user.email}</p>
      <div className="flex justify-around mt-6">
        <button
          className="px-5 py-2 text-sm font-bold bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
          onClick={() => onEdit(user)}
        >
          Edit
        </button>
        <button
          className="px-5 py-2 text-sm font-bold bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
