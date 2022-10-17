import axios from 'axios';
import { useEffect } from 'react';
import Navbar from "./Navbar";
import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { updaters } from './store';

const Letter = () => {

    const search = useSelector((state) => state.newsData.search);
    const cardArray = useSelector((state) => state.newsData.cards);
    const country = useSelector((state) => state.selectData.country);
    const cata = useSelector((state) => state.selectData.category);
    const count = useSelector((state) => state.newsData.count);
    const dispatch = useDispatch();

    function readMore(){
        dispatch(updaters.cardCount());
    }

    useEffect(() => {
        const instance = axios.create({
            baseURL:"https://newsdata.io/api/1",
            method: "get",
            params: {
              apikey: "pub_1223593799f7b07fd41342fc88311a00abbbc", //get an API key from newsData.io
              country: country,
              category: cata
            }
        })
    
        const fetchData = async () => {
          try{
            const response = await instance.get("/news");
            dispatch(updaters.changeCards(response.data.results));
          } catch(err) {
            console.log(err.response.status);
          }
        }

        fetchData();
    }, [search]);

    return(
        <div className = "w-full flex flex-col gap-8">
            <div className = "w-full text-black shadow-lg rounded-lg">
                <Navbar />
                <div>
                    {cardArray.slice(0, count).map((item) => {
                        return (<Card key = {item.link} data = {item} />);
                    })}
                </div>
            </div>
            <button className = 'bg-gray-300 w-fit mx-auto px-4 py-2 rounded-md transition-transform active:scale-95' 
                onClick = {readMore}>{count === 3 ? "Read More" : "Show Less"}</button>
        </div>
    )
}

export default Letter;