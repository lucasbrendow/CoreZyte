import React, { useEffect } from "react";
import "../Styles/Dashboard.css";
import logo from "../Images/CoreZiteLogoText.png";
import mercury from "../Images/planets/Mercury.svg";
import venus from "../Images/planets/Venus.svg";
import earth from "../Images/planets/Earth.svg";
import mars from "../Images/planets/Mars.svg";
import jupiter from "../Images/planets/Jupter.svg";
import saturn from "../Images/planets/Saturn.svg";
import uranus from "../Images/planets/Uranus.svg";
import neptune from "../Images/planets/Neptune.svg";
import sun from "../Images/planets/Sun.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    const planetContainerRef = React.useRef();

    useEffect(() => {
        const scrollToBottom = () => {
            if (planetContainerRef.current) {
                planetContainerRef.current.scrollTop = planetContainerRef.current.scrollHeight;
            }
        };

        // Timeout garante que os elementos já estejam renderizados
        setTimeout(scrollToBottom, 50);
    }, []);

    useEffect(() => {
        const stored = sessionStorage.getItem("user");


        if (!stored) {
            navigate("/");
            return;
        }

        try {
            const parsed = JSON.parse(stored);
            if (parsed && parsed.username) {
                setUser(parsed);
            } else {
                navigate("/");
            }
        } catch (err) {
            console.error("Erro ao interpretar JSON do usuário:", err);
            sessionStorage.removeItem("user"); // limpa dado inválido
            navigate("/");
        }
    }, [navigate]);

    if (!user) {
        return (
            <div style={{ color: "white", background: "black", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p>Carregando informações do usuário...</p>
            </div>
        );
    }

    const planetas = [
        { level: 8, name: "Neptune", img: neptune },
        { level: 7, name: "Uranus", img: uranus },
        { level: 6, name: "Saturn", img: saturn },
        { level: 5, name: "Jupiter", img: jupiter },
        { level: 4, name: "Mars", img: mars },
        { level: 3, name: "Earth", img: earth },
        { level: 2, name: "Venus", img: venus },
        { level: 1, name: "Mercury", img: mercury }
    ];

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <img src={logo} alt="Logo" className="logo-dashboard" />

                <div className="user-info">
                    <div className="avatar-placeholder" />
                    <p className="user-level">Level {user.level}</p>
                    <p className="user-xp">Xp: {String(user.xp).padStart(5, "0")}</p>
                    <p className="user-name">{user.username}</p>
                </div>

                <div className="planet-box">
                    <img src={mercury} alt="Mercury" className="planet-preview" />
                    <p>Mercury</p>
                </div>

                <div className="lessons">
                    <button>What is code?</button>
                    <button>Hello World</button>
                    <button>Variables</button>
                    <button>Functions</button>
                </div>

                <button className="logout-button" onClick={() => {
                    sessionStorage.clear();
                    navigate("/");
                }}>
                    Logout
                </button>
            </aside>

            <main className="space-background">
                <div className="planet-system" ref={planetContainerRef}>
                    {planetas.map((planet) => (
                        <div className="planet-row" key={planet.level}>
                            <img src={planet.img} alt={planet.name} className="planet-image" />
                            <span className="planet-label">Level {planet.level}: {planet.name}</span>
                        </div>
                    ))}
                    <img src={sun} alt="Sun" className="sun-image" />
                </div>

                <footer className="sidebar-footer">
                    <p>© 2025 CoreZite</p>
                </footer>
                <span className="version">Version: 01.01</span>
            </main>
        </div>
    );
};

export default Dashboard;
