import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"; // Reutilizando o CSS do login
import rocketImage from "../Images/rocket.png";
import coreZiteLogo from "../Images/CoreZiteLogoText.png";
import comet1 from "../Images/comet1.png";
import comet2 from "../Images/comet2.png";
import comet3 from "../Images/comet3.png";
import comet4 from "../Images/comet4.png";
import axios from "axios";

const cometsArray = [comet1, comet2, comet3, comet4];

const Register = () => {
    const [username, setUsername] = useState("");
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
            const response = await axios.post("http://localhost:5204/api/auth/register", {
                username,
                email,
                password
            });

            console.log("Usuário registrado:", response.data);
            alert("Cadastro realizado com sucesso!");

            navigate("/"); // Volta pro login
        } catch (error) {
            console.error("Erro no cadastro:", error.response?.data || error.message);
            alert("Erro ao cadastrar: " + (error.response?.data || "Tente novamente"));
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
                        <label htmlFor="username">Nome de Usuário:</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Digite seu nome"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Crie sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-button">
                            Registrar
                        </button>
                    </form>

                    <a href="/" className="forgot-password">
                        Já tem conta? Fazer login
                    </a>
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 CoreZite 01.01</p>
            </footer>
        </div>
    );
};

export default Register;
