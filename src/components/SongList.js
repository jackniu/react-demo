import React, { useState } from 'react'
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
        </div>
    )
}

export default SongList
