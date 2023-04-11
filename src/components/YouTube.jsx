import React, {useState, useEffect, useContext} from "react";
import { SummaryContext } from "../Contexts/SummaryContext";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyAMsQAIXp5nj0s4cq6B9XK6I9hSJ7OVk7g";

function YouTube() {

    const {timerValue, practice, channel} = useContext(SummaryContext);

    const [videos, setVideos] = useState([]);

    
    function searchTerm(channelName) {
      if (channelName==="Random channel") {
        return "yoga" + " " + timerValue + " " + practice;
      } else {
        return "yoga" + " " + timerValue + " " + practice + " " + channel;
      }
    }
    
    
    useEffect(() => {
      YTSearch( { key: API_KEY, term: searchTerm(channel), max:10 }, videos => {
      setVideos(videos);
      });
    },[]);


    console.log(videos);

    function refreshPage() {
      window.location.reload(false);
    }

    const embed = "https://www.youtube.com/embed/";

    return (
        <>
        <div className="youtube-button">
          <button className="btn" onClick={refreshPage}><i class="fa-solid fa-arrow-left"></i>  Go back to search page</button>
        </div>
        <div className="search-results">
            {videos.map(video => (
              <div className="videos-container">
                <iframe className="videos" allow="fullscreen" src={embed + video.id.videoId}></iframe>
              </div>
        ))}
        
              {/* NOTE: test images if YT quota reached
            <div className="videos-embed">
              <img className="test-images" alt="" src="https://img.etimg.com/thumb/width-420,height-315,imgsize-585991,resizemode-1,msid-77291137/news/politics-and-nation/pet-breeders-enjoy-the-new-boom-small-dogs-in-high-demand-amidst-covid-blues/11.jpg"></img>
            </div>
            <div className="videos-embed">
              <img className="test-images" alt="" src="https://img.etimg.com/thumb/width-420,height-315,imgsize-585991,resizemode-1,msid-77291137/news/politics-and-nation/pet-breeders-enjoy-the-new-boom-small-dogs-in-high-demand-amidst-covid-blues/11.jpg"></img>
            </div>
            <div className="videos-embed">
              <img className="test-images" alt="" src="https://img.etimg.com/thumb/width-420,height-315,imgsize-585991,resizemode-1,msid-77291137/news/politics-and-nation/pet-breeders-enjoy-the-new-boom-small-dogs-in-high-demand-amidst-covid-blues/11.jpg"></img>
            </div>
            <div className="videos-embed">
              <img className="test-images" alt="" src="https://img.etimg.com/thumb/width-420,height-315,imgsize-585991,resizemode-1,msid-77291137/news/politics-and-nation/pet-breeders-enjoy-the-new-boom-small-dogs-in-high-demand-amidst-covid-blues/11.jpg"></img>
            </div>
            <div className="videos-embed">
              <img className="test-images" alt="" src="https://img.etimg.com/thumb/width-420,height-315,imgsize-585991,resizemode-1,msid-77291137/news/politics-and-nation/pet-breeders-enjoy-the-new-boom-small-dogs-in-high-demand-amidst-covid-blues/11.jpg"></img>
            </div> */}
            
            
       </div>
       <div className="youtube-button">
          <button className="btn" onClick={refreshPage}><i class="fa-solid fa-arrow-left"></i>  Go back to search page</button>
        </div>
       </>
  );


};


export default YouTube;





