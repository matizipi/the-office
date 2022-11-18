import {useEffect, useState} from "react";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import "./quotes.css";


function Quotes () {
    const [quote, setQuote] = useState (null);
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function getQuotes(){
        if(!shouldRefresh){
            return;
        }

        fetch("https://www.officeapi.dev/api/quotes/random")
            .then(response => response.json())
            .then(data => {
                setShouldRefresh(false);
                setQuote(data.data);
                setIsLoading(false);
            });


    }, [shouldRefresh]);

    function onRefresh(){
        setShouldRefresh(true);
    }

    if(isLoading){
        return (
            <div className="Loading-wrapper">
            <Loading />
            <span>Loading</span>
            </div>
        );
    }

    return(
        <div>
            <h2 className="content">"{quote?.content}"</h2> -
            <h1 className="title">{quote?.character.firstname} {quote?.character.lastname}</h1>
            <button onClick={onRefresh} className="refresh-button">Refresh</button>
        </div>
    );
}

export default Quotes;