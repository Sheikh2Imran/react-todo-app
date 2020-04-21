import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The power of positive thinking', author: 'Vincent Pill', id: 1},
        {title: 'The power of habit', author: 'Charlse Duhig', id: 2},
        {title: 'The power of of your mind', author: 'Dohig', id: 3}
    ]);
    const addNewBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <BookContext.Provider value={{books, addNewBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;