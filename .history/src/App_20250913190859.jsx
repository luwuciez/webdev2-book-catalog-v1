import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1>Book Catalog</h1>
            </div>

            <div>
                <p>© Lucie Zhong, 2025</p>
            </div>
        </>
    );
}

export default App;
