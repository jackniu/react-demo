import React, { useState, createContext } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'HTML', id: 1 },
        { title: 'CSS', id: 2 },
        { title: 'JS', id: 3 },
    ])
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
