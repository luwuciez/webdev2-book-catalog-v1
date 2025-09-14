import "./App.css";

function App() {
    return (
        <>
            <div>
                <p>Welcome to the Book Catalog App!</p>
            </div>
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
