import React, {useState, useRef, useEffect, useContext} from "react";
import { Collapse } from "react-collapse";
import Adrienne from "../images/Adrienne.png";
import Bird from "../images/Bird.png";
import Boho from "../images/Boho.png";
import Candace from "../images/Candace.png";
import Fightmaster from "../images/Fightmaster.png";
import Kassandra from "../images/Kassandra.png";
import Sarah from "../images/Sarah.png";
import Tim from "../images/Tim.png";
import Uliana from "../images/Uliana.png";
import { SummaryContext } from "../Contexts/SummaryContext";


function Channel() {

    const {channel, setChannel, isClickedChannel, setClickChannel} = useContext(SummaryContext);
    const prevChannel = useRef("");
    

    const inlineStyle={
        backgroundColor: "#C85C8E"
    }

    useEffect(() => {
        prevChannel.current = channel;
    }, [channel])


    function changeChannel() {
        setChannel(document.getElementsByClassName("carousel-item active")[0].textContent);
    }

    function handleClick() {
        setClickChannel(!isClickedChannel);
    }
    
    function changeToAnyChannel() {
        setChannel("Random channel");
    }

    return (
        <>
    <div className="section-title" onClick={handleClick} style={isClickedChannel ? inlineStyle : null}>
        <h2>Select <i class="fa-brands fa-square-youtube"></i> YouTube Channel</h2>
        { isClickedChannel ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i> }
    </div>
    <Collapse isOpened={isClickedChannel}>
    <div className="section-content">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-interval="false" data-ride="carousel" data-pause="hover">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Adrienne} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Yoga with Adrienne</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Bird} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Yoga with Bird</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Boho} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Boho Beautiful Yoga</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Candace} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Yoga by Candace</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Fightmaster} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Fightmaster Yoga</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Kassandra} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Yoga with Kassandra</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Sarah} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Sarah Beth Yoga</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Tim} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Yoga with Tim</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Uliana} class="d-block w-100 carousel-image" alt="..." />
                    <div class="hidden carousel-caption d-none d-md-block">
                        <h5>Yoga with Uliana</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className="channel-buttons">
            <button onClick={changeChannel} type="button" class="btn btn-lg"><i class="fa-solid fa-chevron-left"></i> Click to select</button>
            <button onClick={changeToAnyChannel} className="btn btn-lg">Choose random</button>
        </div>
        <div>
            {channel === "" ? null: <h4>You selected: {channel}</h4>}
        </div>
            
    </div>
    </Collapse>
        </>
        
    )

    
    
}


export default Channel;

////ways to improve
////1) save the carousel-item divs into an array and map it inside this component
////2) move confirm button inside the carousel
////3) add icons to practice type
////4) use Day13: FAQ Collapse to select options