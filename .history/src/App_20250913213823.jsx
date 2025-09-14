import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [bookCover, setBookCover] = useState(null);
    const [author, setAuthor] = useState("");
    const [link, setLink] = useState("");

    return (
        <>
            <div className="header">
                <h1>Book Catalog</h1>
            </div>
            <div className="catalog">
                <div>
                    <img src={bookCover} alt="Book Cover" />
                </div>
                <h3>By {author}</h3>
                <a href={link}>Learn more</a>
            </div>
            <div className="footer">
                <p>© Lucie Zhong, 2025</p>
            </div>
        </>
    );
}

function fetchBookData(isbn) {
    return fetch(`https://api.itbook.store/1.0/books/${isbn}`)
        .then((response) => response.json())
        .catch((error) => console.error("Error fetching book data:", error));
}

function Book(isbn) {
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
        <div className="book-container">
            <img src={bookCover} alt="Book Cover" />

            <h3>By {author}</h3>
            <a href={link}>Learn more</a>
        </div>
    );
}

export default App;
