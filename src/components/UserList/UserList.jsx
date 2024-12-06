import React, { useState } from 'react';
import useUsers from '../../hooks/useUsers';
import UserCard from './UserCard';
import EditUser from '../UserManagement/EditUser';
import DeleteUser from '../UserManagement/DeleteUser';
import { toast } from 'react-toastify';

const UserList = () => {
  const [page, setPage] = useState(1);
  const { users, loading, error, setUsers } = useUsers(page);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUserId, setDeletingUserId] = useState(null);

  const handleEdit = (updatedUser) => {
    setUsers((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Manage Users
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            <p className="col-span-full text-center text-lg text-white animate-pulse">
              Loading users...
            </p>
          ) : (
            users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={() => setEditingUser(user)}
                onDelete={() => setDeletingUserId(user.id)}
              />
            ))
          )}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className={`px-6 py-2 font-bold rounded-full transition-all duration-300 ${
              page === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-indigo-500 hover:bg-indigo-100 shadow-lg'
            }`}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-2 font-bold bg-white text-indigo-500 rounded-full hover:bg-indigo-100 shadow-lg transition-all duration-300"
          >
            Next
          </button>
        </div>

        {editingUser && (
          <EditUser
            user={editingUser}
            onClose={() => setEditingUser(null)}
            onUserUpdated={handleEdit}
          />
        )}
        {deletingUserId && (
          <DeleteUser
            userId={deletingUserId}
            onClose={() => setDeletingUserId(null)}
            onUserDeleted={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
