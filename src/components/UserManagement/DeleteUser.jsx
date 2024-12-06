import React from 'react';
import { deleteUser } from '../../api/reqres';
import { toast } from 'react-toastify';

const DeleteUser = ({ userId, onClose, onUserDeleted }) => {
  const handleDelete = async () => {
    try {
      await deleteUser(userId);
      toast.success('User deleted successfully!');
      onUserDeleted(userId);
      onClose();
    } catch (err) {
      toast.error('Failed to delete user.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
        <p className="mb-6">Are you sure you want to delete this user?</p>
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
