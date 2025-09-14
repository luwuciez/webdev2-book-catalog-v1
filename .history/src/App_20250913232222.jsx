import { useEffect, useState } from "react";
import "./App.css";

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

function Book({ isbn }) {
    const [bookCover, setBookCover] = useState(null);
    const [author, setAuthor] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${isbn}`)
            .then((response) => response.json())
            .then((data) => {
                setBookCover(data.image);
                setAuthor(data.authors);
                setLink(data.url);
            })
            .catch((error) => console.error("Error fetching book data:", error));
    }, []);

    return (
        <a href={link} target="_blank">
            <div className="book">
                <img src={bookCover} alt="Book Cover" className="book__cover" />

                <div className="book__author">{author}</div>
            </div>
        </a>
    );
}

export default App;
