const express = require('express');
const app = express();

let books = [
  { id: 'b1', title: 'Book One', description: 'Description of book one', authorId: 'a1' },
  { id: 'b2', title: 'Book Two', description: 'Description of book two', authorId: 'a2' },
];

let reviews = [
  { id: 'r1', text: 'Amazing book!', bookId: 'b1' },
  { id: 'r2', text: 'Decent read.', bookId: 'b2' },
];

let authors = [
  { id: 'a1', name: 'Author One', bio: 'Bio of Author One' },
  { id: 'a2', name: 'Author Two', bio: 'Bio of Author Two' },
];

// Your routing and controller code goes here
app.get("/books",( request, response) => {
    response.json(books);
})

app.get("/reviews",( request, response) => {
    response.json(reviews);
})

app.get("/authors",( request, response) => {
    response.json(authors);
})

app.get("/books/:id", (request, response) => {
    // retrieve the data based on the ID provided
    const selectedBook = books.find(i => i.id === request.params.id);
    const author = authors.find(i => i.id === selectedBook.authorId);
    response.json({
        id: selectedBook.id,
        title: selectedBook.title,
        description: selectedBook.description,
        authorId: selectedBook.authorId,
        name: author.name,
        bio: author.bio
    });
});

app.get("/reviews/:id", (request, response) => {
    // retrieve the data based on the ID provided
    const selectedReview = reviews.find(i => i.id === request.params.id);
    const BookId = books.find(i => i.id === selectedReview.bookId);
    response.json({
        id: selectedReview.id,
        text: selectedReview.text,
        bookId: selectedReview.bookId,
        book_title: BookId.title

    });
});

app.get("/authors/:id", (request, response) => {
    // retrieve the data based on the ID provided
    const selected = authors.find( i => i.id === request.params.id );
    response.json(selected);
});


app.listen(5000, () => {
  console.log('Bookstore app is running on port 5000');
});