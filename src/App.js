import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

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
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
