import React from "react";
import "../Components/CoorporateStory.css";

export default function CoorporateStory() {
  return (
    <div>
      <div className="mainContainer">
        <div className="background">
          <div style={{ display: "flex" }}>
            <div className="yearDiv">
              <div className="year">
                <img className="tape" src="/Group208.svg"></img>
                <span className="yearStyle">2001 :</span>
              </div>
              <div className="yearColumnText">
                <p>
                  Our Journey started from a small facility in Vikhroli , Mumbai
                  with opening of India Delivery Center with 200 people. Before
                  that - we didn't have the delivery center set up in India and
                  operated out of the Anderson Consulting office in Express
                  Towers on Nariman Point.
                </p>
              </div>
            </div>
            <div className="gatewayofIndiaDiv">
              <img id="firstImage" src="/Group240.png"></img>
              <img id="secondImage" src="/Rectangle70.svg"></img>
            </div>

            <div className="ketihDiv">
              <div className="yellow">
                <img src="/Keith_Haviland.svg" style={{ width: "50%",marginRight:15 }}></img>
                <img src="/keith_tagline.svg" style={{ width: "90%", marginRight:15 }}></img>
              </div>
            </div>

            <div className="keithBackgroundCircle">
              <img className="bgcircle" src="/Ellipse26.svg"></img>
            </div>

            <div className="keithimagediv">
              <img src="/Group233.png"></img>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mumbai">
              <img style={{ width: "70%" }} src="/Group211.svg"></img>
            </div>

            <img className="bigcircleimage" src="/Group203.png"></img>

            <div className="path">
              <div className="rightorangebox">
                <div className="dashedline">
                  <p>
                    Some of our leaders were Alok Khandelwal, Ananth
                    Vedagarbham, & Nachit Sukhtankar. And one of the things that
                    never changed over time is how our leaders lived and
                    breathed the Accenture core values which is our base and
                    basics. Right from Day Zero - when it comes to culture,
                    opportunities, carrer growth and leadership - Accenture was
                    truly ahead of block.{" "}
                  </p>
                </div>
                <div className="orangeboximages">
                  <div>
                    <img src="/Group215.png"></img>
                  </div>
                  <div>
                    <img src="/Group218.png"></img>
                  </div>
                  <div>
                    <img src="/Group221.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="belowMumabiRectangle" style={{}}>
            <div className="yellowRectangle">
              <img src="/user2.png"></img>

              <p>
                At that time it was known as India Solution Center (ISC). One
                interesting fact was the first ISC lead Chet Kamat was actually
                working with Anderson Consulting at that point in time. Our
                first Client was JP Morgan Chase with Ramnath leading the
                charge. So with the ATCI lead yet to join, the initial team has
                started working on Project Tiger.{" "}
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <img className="sun" src="/Group205.png"></img>

            <div className="groupEmployeeDiv">

              <img id="burger" className="floating" src="/Group212.svg"></img>

              <img id="yellowCircle" src="/Ellipse15.svg"></img>
              <img id="employeetext" src="/italmost.svg"></img>
            </div>

            <div>
              <img className="sunwithrays" src="/Group222.svg"></img>
              <p className="sunwithraystext">
                One of the many things that makes Accenture unique is the
                experience of "One Accenture" in letter and spirit across
                different locations.
              </p>

              <div className="floating">
                <img className="astronaut" src="/Group231.svg"></img>
              </div>

              <img className="celebration" src="/Group224.png"></img>
            </div>
          </div>

          <div>
            <img className="monuments" src="/Group197.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
