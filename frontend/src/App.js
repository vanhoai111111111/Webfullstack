import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from "./views/AuthPage";
import HomePage from "./views/HomePage";



function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<AuthPage />} />
            </Routes>
        </Router>
    );
}

export default App;