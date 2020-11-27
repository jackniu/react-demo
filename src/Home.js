import React from 'react'
import Rainbow from './hoc/Rainbow'

const Home = () => {
    return (
        <div>
            <div className="container">
                <h1 className="center">Home页面</h1>
                <p>欢迎来到龙马博客</p>
            </div>
        </div>
    )
}

export default Rainbow(Home)
