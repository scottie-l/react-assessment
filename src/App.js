import './App.css';
import { 
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx';

function App() {
    return (
        <div className='App'>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<search />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>    
    );
}

export default App;
