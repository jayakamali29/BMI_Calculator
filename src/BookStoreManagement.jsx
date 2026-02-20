import React, { useState } from "react";

function BookApp() {
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    author: "",
    price: ""
  });

  const [books, setBooks] = useState([]);

  function handleAddBook() {
    if (!book.isbn || !book.title || !book.author || !book.price) {
      alert("All fields are required!");
      return;
    }

    setBooks([...books, book]); 
    setBook({ 
      isbn: "",
      title: "",
      author: "",
      price: ""
    });
  }

  return (
    <div>
      <h2>Book App</h2>
      <input
        type="text"
        placeholder="ISBN"
        value={book.isbn}
        onChange={(e) => setBook({ ...book, isbn: e.target.value })}
      />

      <input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />

      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />

      <input
        type="number"
        placeholder="Price"
        value={book.price}
        onChange={(e) => setBook({ ...book, price: e.target.value })}
      />

      <br /><br />
      <button onClick={handleAddBook}>Add Book</button>

      <hr />

      <h3>View Books</h3>

      {books.length === 0 ? (
        <p>No books added yet</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b, index) => (
              <tr key={index}>
                <td>{b.isbn}</td>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookApp;