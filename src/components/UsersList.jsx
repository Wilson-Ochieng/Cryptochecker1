// src/components/UsersList.jsx
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { getUsers } from '../api';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Typography variant="h4">Users List</Typography>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.username} - {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
