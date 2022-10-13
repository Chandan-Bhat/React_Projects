import image from "./imgs/image.png"

const Card = (props) => {

    function checkDesc(descrip) {
        if(descrip != null){
            if(descrip.length <= 230) return descrip;
            else return descrip.slice(0, 229) + "...";
        } 
    }

    return(
        <div className = "m-5 p-5 flex flex-row justify-start items-center gap-6 border-b-2 border-solid border-gray-300">
            <img 
                src =  {props.data.image_url != null ? props.data.image_url : image}
                alt = "img" className = "w-52 rounded-md shrink-0"/>
            <div className = "flex flex-col justify-around gap-3">
                <h1 className = "text-2xl font-bold">{props.data.title}</h1>
                <div className = "w-9/12 flex justify-between text-sm text-gray-400 font-medium">
                    <span>Creator: {props.data.creator != null ? props.data.creator : "Unknown"} </span>
                    <span>{props.data.pubDate}</span>
                </div>
                <p>{checkDesc(props.data.description)}</p>
                <span>Read the full article <a href = {props.data.link}
                    target = "_blank"><b className = "underline">here</b></a></span>
            </div>
        </div>
    );
}

export default Card;