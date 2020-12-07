import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: '少年', id: 1 },
        { title: '小苹果', id: 2 },
        { title: '琵琶行', id: 3 },
    ]);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }
    const [age, setAge] = useState(18);
    useEffect(() => {
        console.log('useEffect songs', songs)
    }, [songs]);

    useEffect(() => {
        console.log('useEffect age', age)
    }, [age])

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>年龄加1岁：{age}</button>
        </div>
    )
}

export default SongList
