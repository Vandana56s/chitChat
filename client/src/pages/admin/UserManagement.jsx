import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import AdminLayout from '../../components/layout/AdminLayout';
import Table from '../../components/shared/Table';
import { transformImage } from '../../lib/features'; // Adjust the path based on your file structure

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    headerClassName: 'table-header',
    width: 150,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'username',
    headerName: 'Username',
    headerClassName: 'table-header',
    width: 200,
  },
  {
    field: 'friends',
    headerName: 'Friends',
    headerClassName: 'table-header',
    width: 150,
  },
  {
    field: 'groups',
    headerName: 'Groups',
    headerClassName: 'table-header',
    width: 200,
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate data fetching with a timeout
        const users = [
          { _id: 1, avatar: 'avatar1.png', name: 'John Doe', username: 'johndoe', friends: 10, groups: 5 },
          { _id: 2, avatar: 'avatar2.png', name: 'Jane Smith', username: 'janesmith', friends: 15, groups: 3 },
          { _id: 3, avatar: 'avatar3.png', name: 'Alice Johnson', username: 'alicejohnson', friends: 20, groups: 7 },
          // Add more rows as needed
        ];
        const transformedUsers = users.map((user) => ({
          ...user,
          id: user._id,
          avatar: transformImage(user.avatar, 50),
        }));
        setRows(transformedUsers);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <AdminLayout>
      <Table heading={'All Users'} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManagement;
