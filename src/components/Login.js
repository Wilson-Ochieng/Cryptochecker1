// src/components/Login.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { login } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData);
            navigate('/dashboard'); // Redirect to Dashboard after login
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <Typography variant="h5" className="text-center mb-6">
                    Login
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextField
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
