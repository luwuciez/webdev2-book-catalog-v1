import { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        fetch("https://api.itbook.store/1.0/books/9781098139872")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const imgElement = document.querySelector(".catalog img");
                if (imgElement) {
                    imgElement.src = data.image;
                }
            })
            .catch((error) => console.error("Error fetching book data:", error));
    }, []);

    return (
        <>
            <div className="header">
                <h1>Book Catalog</h1>
            </div>
            <div className="catalog">
                <div>
                    <img alt="Book Cover" />
                </div>
            </div>
            <div className="footer">
                <p>© Lucie Zhong, 2025</p>
            </div>
        </>
    );
}

export default App;
