import { useState } from "react";
import logo from "./imgs/notes-light.png"
import del from "./imgs/delete.png"
import Button from "./Button";
import "./Navbar.css"

function Navbar() {

    const [input, setInput] = useState(false);
    const [titles, addName] = useState(["note", "note2", "note3"]);

    const styles = {
        width: input ? "163px" : "0px",
        border: input ? "2.3px solid #222" : "0px solid white"
    }

    function getTitle(){
        setInput(prevState => !prevState);
    }

    function delElem(event) {
        const name = event.target.getAttribute("id");
        addName(prevState => {
            return(prevState.filter(item => item != name))
        })
    }

    const titleComp = titles.map(elem => {
        return (
            <div className="list-item">
                <span className = "item-cont">{elem}</span>
                <img src = {del} alt = "delete" width = "22px" id = {elem} onClick = {delElem} />
            </div>
        )
    })

    function keyPress(event) {
        console.log("keypressed")
        if(event.key === "Enter"){
            console.log("Enter pressed")
            addName(prevState => {
                return [...prevState, event.target.value]
            })
        }
    }

    return(
        <div className = "navbar">
            <div className = "head">
                <div className="left">
                    <img src = {logo} alt = "logo" width = "42px" />
                    <h1>Notes</h1>
                </div>
                <Button />
            </div>
            <div className="add">
                <input name = "title" type = "text" style = {styles} className = "input" onKeyPress = {keyPress}></input> 
                <button className = "add-btn" onClick = {getTitle}>Add</button>
            </div>
            <div className = "list">
                {titleComp}
            </div>
        </div>
    )
}

export default Navbar;