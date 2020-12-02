import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Post from './component/Post';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/" exact component={Home} />
                        <Route path="/:post_id" component={Post} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
