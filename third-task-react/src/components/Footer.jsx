function Footer() {
    return (
        <footer style={{ width: '100%', backgroundColor: '#1f2937', color: 'white', textAlign: 'center', padding: '20px', position: 'fixed', bottom: '0', left: '0' }}>
            <h1 style={{ fontSize: '18px', marginBottom: '8px' }}>Welcome to the Footer!</h1>
            <p style={{ fontSize: '14px', opacity: '0.8' }}>© 2024 MyWebsite. All rights reserved.</p>
            <div>
                <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a>
                <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</a>
            </div>
        </footer>
    );
}
export default Footer;