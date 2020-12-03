import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class ThemeToggle extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{context => {
                const { toggleTheme } = context;
                return (
                    <button onClick={toggleTheme}>切换主题样式</button>
                )
            }}

            </ThemeContext.Consumer>
        )
    }
}

export default ThemeToggle
