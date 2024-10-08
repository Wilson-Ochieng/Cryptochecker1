// src/components/CreateAdmin.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { createAdmin } from '../api';
import { useNavigate } from 'react-router-dom';

const CreateAdmin = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAdmin(formData);
            navigate('/dashboard'); // Redirect to Dashboard after creating admin
        } catch (error) {
            console.error('Error creating admin', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4">Create Admin</Typography>
            <TextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained">Create Admin</Button>
        </form>
    );
};

export default CreateAdmin;
