import { useEffect, useState} from "react";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import "./episodes.css";

function Episodes () {
    const [episode, setEpisode] = useState(null);
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( function getEpisode(){
        if(!shouldRefresh){
            return;
        }
        setIsLoading(true);
            fetch("https://www.officeapi.dev/api/episodes/random")
            .then(response => response.json())
            .then(data => {
                setShouldRefresh(false);
                setEpisode(data.data);
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
            <h1 className="title">{episode.title}</h1> - <h2 className="content">{episode.description}</h2>
            <button onClick={onRefresh} className="refresh-button">Refresh</button>
        </div>
    );

}

export default Episodes;