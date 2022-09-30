import logo from "./imgs/Logo.png"
import pics from "./imgs/group.png"

function Bar() {
    return (
        <nav>
            <img src = {logo} alt="logo" width = "64px" />
            <button>Sign Up</button>
        </nav>
    );
}

function Hero() {
    return (
        <div className = "hero">
            <div>
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
            <img src = {pics} alt = "group"/>
        </div>
    )
}

function Nav() {
    return (
        <>
            <Bar />
            <Hero />
        </>
    )
}

export default Nav;