import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header text="Book Catalog" />
            <Footer text="© Lucie Zhong, 2025" />
        </>
    );
}

function Header(text) {
    return (
        <div className="header">
            <h1>{text}</h1>
        </div>
    );
}

function Footer(text) {
    return (
        <div className="footer">
            <p>{text}</p>
        </div>
    );
}

export default App;
