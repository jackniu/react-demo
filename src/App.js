const { default: Navbar } = require("./components/Navbar");
const { default: BookContextProvider } = require("./contexts/BookContext");

function App() {
    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
            </BookContextProvider>
        </div>
    );
}

export default App;
