const express = require("express");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let users = [];

const isSuperAdmin = (req) => {
    return req.body.role === "superadmin";
};

// Signup endpoint
app.post("/api/signup", (req, res) => {
    const { username, password, role } = req.body;

    // Check if user already exists
    if (users.find((user) => user.username === username)) {
        return res.status(400).json({ message: "User already exists!" });
    }

    // Check for valid roles
    if (!["superadmin", "admin", "user"].includes(role)) {
        return res.status(400).json({ message: "Invalid role!" });
    }

    users.push({ username, password, role }); // Store user data
    res.status(201).json({ message: "User created!" });
});

// Login endpoint
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
        (user) => user.username === username && user.password === password
    );
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials!" });
    }
    res.json({ message: "Login successful!", role: user.role });
});

// Admin creation endpoint
app.post("/api/create-admin", (req, res) => {
    const { username, password } = req.body;
    
    if (!isSuperAdmin(req)) {
        return res.status(403).json({ message: "Access denied!" });
    }
    
    if (users.find((user) => user.username === username)) {
        return res.status(400).json({ message: "User already exists!" });
    }

    users.push({ username, password, role: "admin" }); // Store admin data
    res.status(201).json({ message: "Admin created!" });
});

// User retrieval endpoint (for super admin)
app.get("/api/users", (req, res) => {
    if (!isSuperAdmin(req)) {
        return res.status(403).json({ message: "Access denied!" });
    }
    res.json(users);
});



app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" })

})
app.listen(PORT, () => {

    console.log(`server listening, ${PORT}`);
})
