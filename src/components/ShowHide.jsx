import React, {useState, useContext, useEffect} from "react";
import { SummaryContext } from "../Contexts/SummaryContext";

function ShowHide() {

    const {setClickDuration, setClickPractice, setClickChannel} = useContext(SummaryContext);
    const [isClickedShowAll, setClickShowAll] = useState(false);
    
    const inlineStyle={
        backgroundColor: "#C85C8E"
    }


    function handleClickShowAll() {
        setClickShowAll(!isClickedShowAll);
    }
   
    useEffect(()=> {
        if(isClickedShowAll===false) {
            setClickDuration(false);
            setClickPractice(false);
            setClickChannel(false);
        } else {
            setClickDuration(true);
            setClickPractice(true);
            setClickChannel(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClickedShowAll]);


    return (
        <div className="show-section">
                {isClickedShowAll ? 
                <button className="btn" onClick={handleClickShowAll} style={isClickedShowAll?inlineStyle:null}><i class="fa-solid fa-angle-up"></i> Hide All Selections</button> 
                :
                <button className="btn" onClick={handleClickShowAll}><i class="fa-solid fa-angle-down"></i> Show All Selections</button>
                } 
        </div>
    )
}

export default ShowHide;