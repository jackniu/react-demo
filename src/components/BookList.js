import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class BookList extends Component {
    // 只有类组件才可以使用static，函数组件请参照官方文档；
    // static contextType = ThemeContext;
    render() {

        return (
            <ThemeContext.Consumer>{context => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                        <ul>
                            <li style={{ background: theme.ui }}>HTML</li>
                            <li style={{ background: theme.ui }}>CSS</li>
                            <li style={{ background: theme.ui }}>JS</li>
                        </ul>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        )
    }
}

export default BookList
