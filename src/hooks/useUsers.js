import { useState, useEffect } from 'react';
import { fetchUsers } from '../api/reqres';

const useUsers = (page) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await fetchUsers(page);
        setUsers(data.data);
      } catch (err) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, [page]);

  return { users, loading, error, setUsers };
};

export default useUsers;
