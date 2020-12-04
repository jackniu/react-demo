import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: '少年', id: 1 },
        { title: '小苹果', id: 2 },
        { title: '琵琶行', id: 3 },
    ]);
    const addSong = () => {
        setSongs([...songs, { title: '一生有你', id: uuid() }])
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
            <button onClick={addSong}>添加歌曲</button>
        </div>
    )
}

export default SongList
