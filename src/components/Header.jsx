import React, {useState, useEffect} from "react";
import logo from "../images/justYogaLogo03dark_a.png";

function Header() {
  const date = new Date();
  const dateFormat = date.toLocaleString("en-us", {
    day: "numeric",
    month: "short"
  });

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const now = date.toLocaleTimeString("en-US", { hourCycle: "h23" });

  const [time, setTime] = useState(now);

  useEffect(() => {
    const secTimer = setInterval(() => {
      const newTime = new Date().toLocaleTimeString("en-US", {
        hourCycle: "h23"
      });

      setTime(newTime);
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

 return (
    <div className="header">
        <h1> <img className="logo" src={logo} alt="do-yoga-logo"></img>Just Yoga</h1>
        <p className="date-time">
        {dateFormat}, {weekday[date.getDay()]} | {time}
      </p>
    </div>
 )
    
}

export default Header;