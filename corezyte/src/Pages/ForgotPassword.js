import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"; // Reutilizando o mesmo estilo das outras telas
import rocketImage from "../Images/rocket.png";
import coreZiteLogo from "../Images/CoreZiteLogoText.png";
import comet1 from "../Images/comet1.png";
import comet2 from "../Images/comet2.png";
import comet3 from "../Images/comet3.png";
import comet4 from "../Images/comet4.png";

const cometsArray = [comet1, comet2, comet3, comet4];

const ForgotPassword = () => {
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
                    <h2 style={{ color: "white", marginBottom: "20px" }}>Recuperar Senha</h2>
                    <p style={{ color: "#ccc", fontSize: "16px" }}>
                        Essa funcionalidade estará disponível em breve.
                    </p>

                    <button
                        type="button"
                        className="register-button"
                        style={{ marginTop: "30px" }}
                        onClick={() => navigate("/")}
                    >
                        Voltar
                    </button>
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 CoreZite 01.01</p>
            </footer>
        </div>
    );
};

export default ForgotPassword;
