import { useState } from "react";
import "./Editor.css"
import Taskbar from "./Taskbar";

function Header(props) {

    return (
        <header>
            <h1>{props.title}</h1>
            <div className = "slides">
                <button>Write</button>
                <button>Preview</button>
            </div>
        </header>
    )
}


function Editor() {

    return(
        <div className="editor">
            <Header title = "Fallout 4 Mods" />
            <Taskbar />
            <textarea name = "write-pad" id="write-pad" className = "write-pad">Start Writing Here...</textarea>
        </div>
    )
}

export default Editor;