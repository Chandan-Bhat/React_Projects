import pic from "./imgs/pic.jpg"
import mail from "./imgs/email.png"

function Img() {
    return (
        <img src = {pic} width = "170px" className = "pic"/>
    );
}

function Info(props) {
    return (
        <div className = "info">
            <Img />
            <h3>{props.info.name}</h3>
            <h5>{props.info.occupy}</h5>
            <a href = {props.info.link}>{props.info.link}</a>
            <p>
            <button>
                <img src = {mail} width = "18" />
                <p className = "para">Email</p>
            </button>
            </p>
        </div>
    );
}

export default Info;


