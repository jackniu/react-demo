const { default: BookList } = require("./components/BookList");
const { default: Navbar } = require("./components/Navbar");
const { default: BookContextProvider } = require("./contexts/BookContext");

function App() {
    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
                <BookList />
            </BookContextProvider>
        </div>
    );
}

export default App;
