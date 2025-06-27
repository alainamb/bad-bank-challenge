// navbar.js

function NavBar(){
    const ctx = React.useContext(UserContext);
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
        <div className="p-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">BadBank</a>
            <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleNavbar}
                aria-controls="navbarNav" 
                aria-expanded={isNavbarOpen} 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                
                <li className="nav-item">
                    <a className="nav-link" href="#/CreateAccount/" onClick={() => setIsNavbarOpen(false)}>Create Account</a>
                </li>

                {/* Show Login or Logout based on user status */}
                {!ctx.currentUser ? (
                    <li className="nav-item">
                        <a className="nav-link" href="#/login/" onClick={() => setIsNavbarOpen(false)}>Login</a>
                    </li>
                ) : (
                    <li className="nav-item">
                        <a className="nav-link" href="#/login/" onClick={() => setIsNavbarOpen(false)}>Logout</a>
                    </li>
                )}

                {/* Only show these if user is logged in */}
                {ctx.currentUser && (
                    <>
                    <li className="nav-item">
                        <a className="nav-link" href="#/myaccount/" onClick={() => setIsNavbarOpen(false)}>My Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/accountactivity/" onClick={() => setIsNavbarOpen(false)}>Account Activity</a>
                    </li>
                    </>
                )}

                {/* Only show this if user is logged in AND is admin */}
                {ctx.currentUser && ctx.currentUser.admin === 1 && (
                    <li className="nav-item">
                        <a className="nav-link" href="#/alldata/" onClick={() => setIsNavbarOpen(false)}>All Data</a>
                    </li>
                )}
                </ul>

            </div>
            </nav>
        </div>
        </>
    );
}
