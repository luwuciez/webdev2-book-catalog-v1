import { useEffect, useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <div className="header">
                <h1>Book Catalog</h1>
            </div>
            <div className="catalog">
                <Book isbn="9781098139872" />
            </div>
            <div className="footer">
                <p>© Lucie Zhong, 2025</p>
            </div>
        </>
    );
}

function Book({ isbn }) {
    const [bookCover, setBookCover] = useState(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${isbn}`)
            .then((response) => response.json())
            .then((data) => {
                setBookCover(data.image);
                setTitle(data.title);
                setAuthor(data.authors);
                setLink(data.url);
            })
            .catch((error) => console.error("Error fetching book data:", error));
    }, []);

    return (
        <div className="book">
            <img src={bookCover} alt="Book Cover" className="book__cover" />
            <div className="book__title">{title}</div>
            <div className="book__author">
                <p>By</p>
                <p className="book__author-names">{author}</p>
            </div>
            <a href={link} className="book__link" target="_blank">
                Learn more
            </a>
        </div>
    );
}

export default App;
