import star from "./imgs/star.png"

function Card(props) {
    return (
        <div className = "card">
            <img src = {props.deal.img} alt = "sidemen" width = "200px" />
            <div className="intro">
                <b>{props.deal.name}</b>
                <div>
                    <img src = {star} alt="star" width = "9px" />
                    <span>{props.deal.rate}</span>
                </div>
            </div>
            <div className="info">
                <div className = "smaller">
                    <span>{props.deal.dist}</span><br />
                    <span>{props.deal.date}</span>
                </div>
                <span><b>{props.deal.price}</b> {props.deal.time}</span>
            </div>
        </div>
    )
} 

export default Card;