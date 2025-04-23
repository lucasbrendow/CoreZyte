import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../api";
import "../Styles/Login.css";
import rocketImage from "../Images/rocket.png";
import coreZiteLogo from "../Images/CoreZiteLogoText.png";
import comet1 from "../Images/comet1.png";
import comet2 from "../Images/comet2.png";
import comet3 from "../Images/comet3.png";
import comet4 from "../Images/comet4.png";
import axios from "axios";

const cometsArray = [comet1, comet2, comet3, comet4]; // Lista de cometas

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comets, setComets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            const randomComet = cometsArray[Math.floor(Math.random() * cometsArray.length)];

            const newComet = {
                id: Math.random(),
                left: `${Math.random() * 100}vw`,
                size: `${Math.random() * 100 + 150}px`,
                duration: `${Math.random() * 4 + 3}s`,
                image: randomComet
            };

            setComets(prevComets => [...prevComets, newComet]);

            setTimeout(() => {
                setComets(prevComets => prevComets.slice(1));
            }, 6000);
        }, 700);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
                email,
                password
            });
    
            console.log("Dados brutos da resposta da API:", response.data);
    
            const { id, username } = response.data;
    
            if (!username) {
                alert("Login falhou: dados de usuário não retornados.");
                return;
            }
    
            // Construindo manualmente o objeto user para o Dashboard
            const userData = {
                id,
                username,
                level: 1, // padrão inicial
                xp: 0     // padrão inicial
            };
    
            sessionStorage.setItem("user", JSON.stringify(userData));
            navigate("/dashboard");
    
        } catch (error) {
            console.error("Erro no login:", error.response?.data || error.message);
            alert("Erro ao fazer login. Verifique seus dados e tente novamente.");
        }
    };    
    

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="comet-container">
                    {comets.map(comet => (
                        <img
                            key={comet.id}
                            src={comet.image}
                            className="comet"
                            style={{
                                left: comet.left,
                                width: comet.size,
                                animationDuration: comet.duration
                            }}
                        />
                    ))}
                </div>

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

                    <div>
                        <button
                            type="button"
                            className="register-button"
                            onClick={() => navigate("/register")}
                        >
                            Criar nova conta
                        </button>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 CoreZite 01.01</p>
            </footer>
        </div>
    );
};

export default Login;
