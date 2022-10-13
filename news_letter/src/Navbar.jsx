import { useDispatch, useSelector } from "react-redux";
import logo from "./imgs/logo.png"
import { actions } from "./store";
import { updaters } from "./store";

const Navbar = () => {

    const allCountry = [
        {value: "in", txt: "India"},
        {value: "jp", txt: "Japan"},
        {value: "us", txt: "USA"},
        {value: "ru", txt: "Russia"},
    ];

    const allCategory = [
        {value: "business", txt: "Business"},
        {value: "entertainment", txt: "Entertainment"},
        {value: "politics", txt: "Politics"},
        {value: "science", txt: "Science"},
        {value: "sports", txt: "Sports"},
        {value: "technology", txt: "Technology"}
    ];

    const state = useSelector((state) => state.selectData);
    const dispatch = useDispatch();

    function changeCategory(event) {
        dispatch(actions.changeCategory(event.target.value));
    }

    function changeCountry(event) {
        dispatch(actions.changeCountry(event.target.value));
    }

    function setSearch() {
        dispatch(updaters.changeSearch());
        console.log("clicked search");
    }

    return(
        <div className = "w-full bg-gray-300 p-4 rounded-t-lg flex justify-between items-center">
            <div className = "flex justify-center items-center gap-4">
                <img src = {logo} alt = "logo" className = "w-12 h-12"/>
                <h1 className = "font-bold text-3xl">News</h1>    
            </div>
            <div className = "flex justify-center items-center gap-4">
                <select name = "cntry" className = "bg-transparent border-2 border-solid border-black rounded-xl px-2 py-0.7 font-bold"
                    onChange = {changeCountry}>
                    {allCountry.map((item) => {
                            return (<option  key = {item.value} value = {item.value}>{item.txt}</option>)
                        }
                    )}
                </select>
                <select name = "ctgry" className = "bg-transparent border-2 border-solid border-black rounded-xl px-2 py-0.7 font-bold"
                    onChange = {changeCategory}>
                {allCategory.map((item) => {
                            return (<option  key = {item.value} value = {item.value}>{item.txt}</option>)
                        }
                    )}
                </select>
                <button className = "bg-transaprent border-2 border-solid border-black rounded-xl px-4 py-0.5 font-bold hover:bg-black hover:text-white transition active:scale-95"
                    onClick = {setSearch}>Search</button>
            </div>
        </div>
    )
}

export default Navbar;