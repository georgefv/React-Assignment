import "../index.css";
import { Link } from "react-router-dom";

export default function TheTop() {
    return (
        <header>
            <nav id="hamnav">
                <h1 id="websiteName">Modern Architecture</h1>

                <div id="hamItems">
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/about">About</Link> |{" "}
                    <Link to="/projects">Projects</Link> |{" "}
                    <Link to="/contact">Contact</Link> |{" "}
                </div>

                <div id="hamItemsMobile">
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/about">About</Link> |{" "}
                    <Link to="/projects">Projects</Link> |{" "}
                    <Link to="/contact">Contact</Link> |{" "}
                </div>

            </nav>
        </header>
    );
}