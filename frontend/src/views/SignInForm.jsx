import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { login } from "../controllers/AuthController";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const result = await login(email, password);


            navigate('/home'); // ✅ Chuyển sang trang HomePage
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form className="form" onSubmit={handleSignIn}>
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <a href="#" className="link">Forgot your password?</a>
            <button type="submit" className="btn">Sign In</button>
        </form>
    );
};

export default SignInForm;
