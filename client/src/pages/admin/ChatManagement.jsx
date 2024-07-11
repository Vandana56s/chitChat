
import { Avatar, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import AvatarCard from "../../components/shared/AvatarCard";
import Table from "../../components/shared/Table";
import { transformImage } from "../../lib/features"; // Adjust the path based on your file structure

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => <AvatarCard avatar={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "groupChat",
    headerName: "Group",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 400,
    renderCell: (params) => (
      <AvatarCard max={100} avatar={params.row.members} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={"1rem"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate data fetching with a timeout
        const data = {
          chats: [
            {
              _id: 1,
              avatar: ['avatar1.png'],
              name: 'Chat 1',
              groupChat: 'Group 1',
              totalMembers: 5,
              members: [{ avatar: 'avatar2.png' }],
              totalMessages: 100,
              creator: { name: 'User 1', avatar: 'avatar3.png' },
            },
            {
              _id: 2,
              avatar: ['avatar4.png'],
              name: 'Chat 2',
              groupChat: 'Group 2',
              totalMembers: 8,
              members: [{ avatar: 'avatar5.png' }],
              totalMessages: 150,
              creator: { name: 'User 2', avatar: 'avatar6.png' },
            },
            // Add more chats as needed
          ],
        };
        
        const transformedChats = data.chats.map((i) => ({
          ...i,
          id: i._id,
          avatar: i.avatar.map((img) => transformImage(img, 50)),
          members: i.members.map((member) => transformImage(member.avatar, 50)),
          creator: {
            name: i.creator.name,
            avatar: transformImage(i.creator.avatar, 50),
          },
        }));
        setRows(transformedChats);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Skeleton height={"100vh"} />;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <AdminLayout>
      <Table heading={"All Chats"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default ChatManagement;
