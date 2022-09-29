import insta from "./imgs/instagram.svg"
import git from "./imgs/GitHub.png"
import face from "./imgs/facebook.svg"
import link from "./imgs/linkedin.svg"

function Footer(props) {
    return(
        <div className = "footer">
            <a href = {props.social.insta} target = "_blank"><img src = {insta} width = "14px" className = "icon"/></a>
            <a href = {props.social.git} target = "_blank"><img src = {git} width = "14px" className = "icon"/></a>
            <a href = {props.social.face} target = "_blank"><img src = {face} width = "14px" className = "icon"/></a>
            <a href = {props.social.link} target = "_blank"><img src = {link} width = "14px" className = "icon"/></a>
        </div>
    )
}

export default Footer;