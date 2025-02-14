import React, { useState } from "react";
import "./Login.css"; // Certifique-se de criar e ajustar o arquivo de estiliza��o
import rocketImage from "./Images/rocket.png";
import coreZiteLogo from "./Images/CoreZiteLogoText.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // Aqui voc� pode implementar a l�gica de autentica��o
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <img src={rocketImage} alt="Rocket" className="rocket-image" />
            </div>
            <div className="login-right">
                <div className="login-box">
                    <img src={coreZiteLogo} alt="CoreZite Logo" className="logo" />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
                    <a href="/forgot-password" className="forgot-password">
                        Forgot the password?
                    </a>
                </div>
            </div>
            <footer className="footer">
                <p>� 2025 CoreZite  01.01</p>
            </footer>
        </div>
    );
};

export default Login;
