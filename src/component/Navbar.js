import React from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";
// 不是路由控制的组件，可以通过withRouter包裹来拥有路由返回的对象

const Navbar = (props) => {
    // console.log(props)
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">龙马博客</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
