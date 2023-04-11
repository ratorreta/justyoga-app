import React, {useState, useEffect} from "react";
import { unstable_batchedUpdates } from "react-dom";
import Header from "./Header";
import Duration from "./Duration";
import Channel from "./Channel";
import Practice from "./Practice";
import Footer from "./Footer";
import Summary from "./Summary";
import ShowHide from "./ShowHide";
import YouTube from "./YouTube";
import { SummaryContext } from "../Contexts/SummaryContext";


function App() {

    const [timerValue, showTimerValue] = useState("");
    const [channel, setChannel] = useState("");
    const [practice,setPractice] = useState("");
    const [isClickedDuration, setClickDuration] = useState(false);
    const [isClickedPractice, setClickPractice] = useState(false);
    const [isClickedChannel, setClickChannel] = useState(false);
    const [searchClicked, setSearchClick] = useState(false);

    useEffect(()=>{
        if(searchClicked===true) {
            unstable_batchedUpdates(()=> {
                showTimerValue(timerValue);
                setPractice(practice);
                setChannel(channel);
            });
        }
    }, [searchClicked])
    
    return (
        <>
            <Header />
            <SummaryContext.Provider value={{timerValue, showTimerValue, channel, setChannel, practice, setPractice, 
            isClickedDuration, setClickDuration, isClickedPractice, setClickPractice, isClickedChannel, setClickChannel, 
            searchClicked, setSearchClick}}>
                {searchClicked ? 
                    <YouTube /> :
                    <>
                    <ShowHide />
                    <Duration />
                    <Practice />
                    <Channel />
                    <Summary />
                    </>}
            </SummaryContext.Provider>
            <Footer />
            
            
        </>
        
    )
}

export default App;