import React, {useContext, useState, useEffect, useRef} from "react";
import { SummaryContext } from "../Contexts/SummaryContext";
import { unstable_batchedUpdates } from "react-dom";

function Summary() {

    const {timerValue, practice, channel, showTimerValue, setPractice, setChannel, searchClicked, setSearchClick} = useContext(SummaryContext);
    const [isClear, setClear] = useState(false);

    const prevTimer = useRef("");
    const prevPractice = useRef("");
    const prevChannel = useRef("");

    function handleClear() {
        setClear(true);
    }

    function handleUndo() {
        setClear(false);
    }

    function handleSearchClick() {
        setSearchClick(true);
    }

    useEffect(()=> {
        if (isClear === true) {
            unstable_batchedUpdates(() => {
                showTimerValue("");
                setPractice("");
                setChannel("");
            });
        } else {
            unstable_batchedUpdates(()=> {
                showTimerValue(prevTimer.current);
                setPractice(prevPractice.current);
                setChannel(prevChannel.current);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClear]);

    useEffect(()=> {
        prevTimer.current = timerValue;
        prevPractice.current = practice;
        prevChannel.current = channel;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isClear]);   

    
    return (
        <>
        <div className="summary-section">
            <div>
                <h2>Review your selections:</h2>
            </div>
            <div className="summary-list">
                <ul>
                    <li><h5>Duration: {timerValue} </h5></li>
                    <li><h5>Practice: {practice} </h5></li>
                    <li><h5>Channel: {channel} </h5></li>
                </ul>
            </div>
            <div className="summary-buttons">
                <button className="btn sbtn1" onClick={handleSearchClick} disabled={!timerValue||!practice||!channel}>Search <i class="fa-brands fa-youtube"></i> YouTube</button>
                <button className="btn sbtn2" onClick={handleClear} disabled={!timerValue||!practice||!channel}><i class="fa-sharp fa-solid fa-circle-xmark"></i> Clear Selections</button>
                <button className="btn sbtn3" onClick={handleUndo} disabled={timerValue||practice||channel}><i class="fa-solid fa-rotate-left"></i> Undo Clear</button>
            </div>
        </div>
        </>
    )

}


export default Summary;


