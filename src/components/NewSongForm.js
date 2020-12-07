import React, { useState } from 'react'

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title);
        addSong(title);
        setTitle('');
    }
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor=""></label>
            <input type="text" value={title} onChange={handleChange} />
            <input type="submit" value="添加歌曲" />
        </form>
    )
}

export default NewSongForm
