import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignUp from './SignUp';



function Nav() {
    return (
        <BrowserRouter>
            <nav style={{ display: 'flex', justifyContent: 'center', padding: '16px', backgroundColor: '#1f2937' }}>
                <Link to="/Home" style={{ color: 'white', margin: '0 12px', textDecoration: 'none', fontSize: '18px' }}>Home</Link> |
                <Link to="/About" style={{ color: 'white', margin: '0 12px', textDecoration: 'none', fontSize: '18px' }}>About</Link> |
                <Link to="/Contact" style={{ color: 'white', margin: '0 12px', textDecoration: 'none', fontSize: '18px' }}>Contact</Link> |
                <Link to="/SignUp" style={{ color: 'white', margin: '0 12px', textDecoration: 'none', fontSize: '18px' }}>SignUp</Link>
            </nav>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Nav;