import "./App.css";
import Book from "/src/Book.jsx";

function App() {
    return (
        <>
            <div className="header">
                <h1>Book Catalog</h1>
            </div>
            <div className="catalog">
                <Book isbn="9781484282939" />
                <Book isbn="9781803231280" />
            </div>
            <div className="footer">
                <p>© Lucie Zhong, 2025</p>
            </div>
        </>
    );
}

export default App;
