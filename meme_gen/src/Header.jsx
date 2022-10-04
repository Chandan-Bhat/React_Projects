import logo from "./imgs/logo.png"

function Header() {
    return(
        <nav className="header">
            <div className="left">
                <img src = {logo} alt="logo" width = "28px" />
                <span>Meme Generator</span>
            </div>
            <div className="right">
                <span>A React Project</span>
            </div>
        </nav>
    );
}

export default Header;