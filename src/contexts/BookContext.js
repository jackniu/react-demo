import React, { useState, createContext } from 'react'
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: '史记', author: '司马迁', id: 1 },
        { title: '资治通鉴', author: '司马光', id: 2 },
        { title: '左传', author: '左丘明', id: 3 },
    ])

    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid() }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => {
            return book.id !== id;
        }))
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
