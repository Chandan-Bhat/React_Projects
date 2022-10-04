import {useState, useEffect} from "react";
let url;

function Meme() {
    const[url, setURL] = useState("https://i.imgflip.com/30b1gx.jpg");
    const [txt, setTxt] = useState({"top-txt": "", "btm-txt": ""});
    const [memeArray, setArray] = useState({})

    function getMeme(){    
        const random = Math.floor(Math.random() * memeArray.length);
        const newURL = memeArray[random].url;
        setURL(newURL);
    }

    function getTxt(event) {
        setTxt((prevState) => {
            return {...prevState, [event.target.name] : event.target.value}
        });
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setArray(data.data.memes));
        console.log("running");
    }, [])


    return(
        <>
        <div className = "form-cont">
            <div className="inp">
                <input type = "text" name = "top-txt" id = "part1" placeholder = "Top txt..." onChange = {getTxt} />
                <input type = "text" name = "btm-txt" id = "part2" placeholder = "Bottom txt..." onChange = {getTxt} />
            </div>
            <button className = "but" onClick = {getMeme} >Get a new Meme Image</button>
        </div>

        <div className="img-cont">
            <div className="cont">
                <span className = "top">{txt["top-txt"]}</span>
                <img src = {url} alt = "meme" />
                <span className = "btm">{txt["btm-txt"]}</span>
            </div>
        </div>
        </>
    )
}  

export default Meme;