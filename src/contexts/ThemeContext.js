import React, { createContext, Component } from 'react'

// 1. 创建context，保存在变量ThemeContext里
export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
    // 创建共享的数据，存在state里
    state = {
        isLightTheme: true,
        light: {
            bg: '#eee',
            ui: '#ddd',
            syntax: '#555',
        },
        dark: {
            bg: '#555',
            ui: '#333',
            syntax: '#ddd',
        }
    }
    render() {
        return (
            // 3. 通过value属性，把当前的state值传递给ThemeContext.Provider方法，然后再传递给包裹在它里面的子组件（consumer component，消费组件）。
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
