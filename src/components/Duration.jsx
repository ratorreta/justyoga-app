import React, {useState, useContext} from "react";
import CircularSlider from '@fseehawer/react-circular-slider';
import {Collapse} from 'react-collapse';
import { SummaryContext } from "../Contexts/SummaryContext";


const Duration = () => {

    const {timerValue, showTimerValue, isClickedDuration, setClickDuration} = useContext(SummaryContext);
    const [timer, setTimer] = useState("10");
    

    const inlineStyle={
        backgroundColor: "#C85C8E"
    }

    function showTimer() {
        showTimerValue(timer);
    }


    function handleClick() {
        setClickDuration(!isClickedDuration);
    }

 
    return (
        <>
        <div className="section-title" onClick={handleClick} style={isClickedDuration ? inlineStyle : null}>
            <h2>Select Duration</h2>
            {isClickedDuration ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i> }
        </div>
        <Collapse isOpened={isClickedDuration}>
            <div className="section-content">
                <CircularSlider
                    label="How many minutes?"
                    labelFontSize="1.25rem"
                    labelColor="#9c3866"
                    knobColor="#7B2869"
                    progressColorFrom="#FFBABA" 
                    progressColorTo="#9D3C72"
                    progressSize={24}
                    trackColor="#EAEAEA"
                    trackSize={24}
                    data={["0","5 mins","10 mins", "15 mins","20 mins","25 mins","30 mins", "35 mins","40 mins","45 mins","50 mins","55 mins","60 mins"]}
                    dataIndex={2}
                    onChange={ time => { setTimer(time); } }
                />
                <button onClick={showTimer} type="button" class="btn btn-lg">Click to select</button>
                {timerValue === "" ? null: <h4>You selected: {timerValue}</h4>}
            </div>
        </Collapse>
        </>
    )
};



export default Duration;