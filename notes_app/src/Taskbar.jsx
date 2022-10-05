import letr_h from "./imgs/h.png"
import letr_b from "./imgs/b.png"
import letr_i from "./imgs/i.png"
import letr_u from "./imgs/u.png"

import link from "./imgs/link.png"
import quotes from "./imgs/quotes.png"
import code from "./imgs/code.png"
import image from "./imgs/image.png"

import o_list from "./imgs/o-list.png"
import uo_list from "./imgs/uo-list.png"

function Taskbar() {

    return(
        <div className = "taskbar">
            <div className = "text">
                <img src={letr_h} alt="letr_h" />
                <img src={letr_b} alt="letr_b" />
                <img src={letr_i} alt="letr_i" />
                <img src={letr_u} alt="letr_u" />
            </div>

            <div className = "tags">
                <img src={link} alt="link" />
                <img src={quotes} alt="quotes" />
                <img src={code} alt="code" />
                <img src={image} alt="image" />
            </div>

            <div className = "html-list">
                <img src={o_list} alt="o_list" />
                <img src={uo_list} alt="uo_list" />
            </div>
        </div>
    )
}

export default Taskbar;