import "./App.css";
import "https://api.itbook.store/1.0/";

function App() {
    return (
        <>
            <div className="header">
                <h1>Book Catalog</h1>
            </div>
            <div className="catalog">
                <div>
                    <img src="https://api.itbook.store/1.0/9781098139872" alt="Book Cover" />
                </div>
            </div>
            <div className="footer">
                <p>© Lucie Zhong, 2025</p>
            </div>
        </>
    );
}

export default App;
