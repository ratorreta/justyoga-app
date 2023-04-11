import React, {useState, useContext} from "react";
import { Collapse } from "react-collapse";
import reliefImage_w from "../images/painIcon_w.png";
import generalImage_w from "../images/yogaIcon_w.png";
import reliefImage_b from "../images/painIcon_b.png";
import generalImage_b from "../images/yogaIcon_b.png";
import { SummaryContext } from "../Contexts/SummaryContext";

function Practice() {

    const {practice, setPractice, isClickedPractice, setClickPractice} = useContext(SummaryContext);
    const [onHoverGeneral, setHoverStateGeneral] = useState(false);
    const [onHoverRelief, setHoverStateRelief] = useState(false);


    const inlineStyle={
        backgroundColor: "#C85C8E"
    }

    function changePractice(event) {
        setPractice(event.target.textContent);
        event.preventDefault();
    }

    function handleClick() {
        setClickPractice(!isClickedPractice);
    }
  
    return (
        <>
        <div className="section-title" onClick={handleClick} style={isClickedPractice ? inlineStyle : null}>
            <h2>Select Practice Type</h2>
            { isClickedPractice ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i> }
        </div>
        <Collapse isOpened={isClickedPractice}>
            <div className="practice-instruction">
                <h5>Choose from dropdown buttons</h5>
            </div>
            <div className="section-content">
                <div class="btn-group" onMouseOver={()=>setHoverStateGeneral(true)} onMouseOut={()=>setHoverStateGeneral(false)}>
                    <button class="btn btn-lg dropdown-toggle practice-drpbutton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={onHoverGeneral ? generalImage_b : generalImage_w} className="practice-image"></img>General Yoga Practice
                    </button>
                    <div class="dropdown-menu">
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Full Body Vinyasa</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Morning</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Bedtime</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Hatha</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Yin Yoga</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Restorative</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Standing</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Chair</a></li>
                    </div>
                </div>
                <div class="btn-group" onMouseOver={() => setHoverStateRelief(true)} onMouseOut={()=> setHoverStateRelief(false)}>
                    <button class="btn btn-lg dropdown-toggle practice-drpbutton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={onHoverRelief ? reliefImage_b : reliefImage_w} className="practice-image"></img>Yoga For Relief
                    </button>
                    <div class="dropdown-menu">
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Back Pain</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Shoulder and Neck Pain</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Menstrual Pain</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Digestion</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Anxiety</a></li>
                        <li onClick={changePractice}><a class="dropdown-item" href="#">Stress Relief</a></li>
                    </div>
                </div>
            
            {practice === "" ? null : <h4>You selected: {practice}</h4>}
            </div>
        </Collapse>
        </>
    )
}

export default Practice;