import React, { useState } from "react";
import { signup } from "../controllers/AuthController";
import UserModel from "../models/UserModel";

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const user = new UserModel(username, email, password);
        try {
            const result = await signup(user);
            alert("Đăng ký thành công!");
            console.log(result);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form className="form" onSubmit={handleSignUp}>
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="Username" className="input" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="btn">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
