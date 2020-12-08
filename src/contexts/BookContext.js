import React, { useState, createContext } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: '史记', author: '司马迁', id: 1 },
        { title: '资治通鉴', author: '司马光', id: 2 },
        { title: '左传', author: '左丘明', id: 3 },
    ])

    const addBook = (title, author) => {
        setBooks([...books, { title, author }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => {
            return book.id !== id;
        }))
    }
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
