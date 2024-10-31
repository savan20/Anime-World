// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [userAdminDropdown, setUserAdminDropdown] = useState(false); // State for User/Admin dropdown

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get('http://localhost:5000/api/admin/dashboard-stats/users');
        const adminRes = await axios.get('http://localhost:5000/api/admin/dashboard-stats/admins');

        setUsers(userRes.data.users);
        setAdmins(adminRes.data.admins);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <nav className="navbar">
        <div className="navbar-logo">
          <h2>Admin Panel</h2>
        </div>
        <ul className="navbar-links">
          <li><Link to="#">Home</Link></li>

          {/* Dropdown for User/Admin */}
          <li className="dropdown">
            <span className="dropdown-title">User/Admin</span>
            <ul className="dropdown-content">
              <li><Link to="/admin/add-user-admin">Add User/Admin</Link></li>
              <li><Link to="/admin/delete-user-admin">Delete User/Admin</Link></li>
            </ul>
          </li>

          <li><Link to="/admin/anime-management">AnimeCollections</Link></li>
          <li><Link to="/admin/add-anime">Add Anime</Link></li>
          <li><Link to="/Login">Logout</Link></li>
        </ul>
      </nav>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>Users Logged In</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="stat-card">
          <h2>Admins Logged In</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={index}>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
