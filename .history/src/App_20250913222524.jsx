import { useEffect, useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <div className="header">
                <h1>Book Catalog</h1>
            </div>
            <div className="catalog">
                <Book isbn="9781617294136" />
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
        <div className="book">
            <img src={bookCover} alt="Book Cover" className="book__cover" />
            <div>
                <h3 className="book__author">
                    By <em>{author}</em>
                </h3>
            </div>
            <a href={link}>
                <div className="book__link">Learn more</div>
            </a>
        </div>
    );
}

export default App;
