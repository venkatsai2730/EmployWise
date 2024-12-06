import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/reqres';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const { login: saveToken } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await login({ email, password });
      saveToken(data.token);
      toast.success('Logged in successfully!');
      navigate('/users');
    } catch (err) {
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
      >
        <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Please log in to continue
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className={`w-full py-3 font-bold text-white rounded-lg shadow-md ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-pink-500'
          } transition-colors duration-300`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <span className="text-indigo-600 font-bold cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
