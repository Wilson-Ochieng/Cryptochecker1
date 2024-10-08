// src/api.js
import axios from "axios";

const API_URL = "http://localhost:3001/api"; // Change to your server URL

export const signup = async (userData) => {
    return await axios.post(`${API_URL}/signup`, userData);
};

export const login = async (userData) => {
    return await axios.post(`${API_URL}/login`, userData);
};

export const createAdmin = async (adminData) => {
    return await axios.post(`${API_URL}/create-admin`, adminData);
};

export const getUsers = async () => {
    return await axios.get(`${API_URL}/users`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
    });
};
