import React from "react";
import "./App.css"
import Info from "./Info";
import About from "./About";
import Footer from "./Footer"

let data = {
    'name': "Chandan Bhat",
    'occupy': "Front-End Dev",
    'link': "smtg@smtg.com",
    'email': "wtvr"
}

let links = {
    'insta': "https://www.instagram.com/",
    'git': "https://github.com/",
    'face': "https://www.facebook.com/",
    'link': "https://www.linkedin.com/"
}

function App() {
    return(
        <div className = "card">
            <Info info = {data} />
            <About />
            <Footer social = {links} />
        </div>
    )
}

export default App;