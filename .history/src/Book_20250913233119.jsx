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
export default Book;
