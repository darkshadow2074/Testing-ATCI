import React from "react";

import {GROUP208,GROUP240,RECTANGLE70,GROUP211,USER2,GROUP203,GROUP205,GROUP212,ELLIPSE15,ELLIPSE75,ELLIPSE67,BHAVIN,BALAJI} from '../utils/constant'
import "../Components/Coorporate_LeaderShip.css";

export default function CoorporateLeaderShip() {
  return (
    <div className="container1">
      <div className="leftbox1">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="yearDiv1">
            <div className="year1">
              <img className="tape1" src={GROUP208}></img>
              <span className="yearStyle1">2001 :</span>
            </div>
            <div className="yearColumnText1">
              <p>
                Our Journey started from a small facility in Vikhroli , Mumbai
                with opening of India Delivery Center with 200 people. Before
                that - we didn't have the delivery center set up in India and
                operated out of the Anderson Consulting office in Express Towers
                on Nariman Point.
              </p>
            </div>
          </div>
          <div className="gatewayofIndiaDiv1">
            <img id="firstImage1" src={GROUP240}></img>
            <img id="secondImage1" src={RECTANGLE70}></img>
          </div>
        </div>
        <div className="mumbai1">
          <img style={{ width: "30%" }} src={GROUP211}></img>
        </div>
        <div className="belowMumabiRectangle1" style={{}}>
          <div style={{display:'flex', alignItems:'center' ,justifyContent:'center', width:'80%'}}>
            <img className="hee" src={USER2}></img>

            <p className="yellowRectangle1">
              At that time it was known as India Solution Center (ISC). One
              interesting fact was the first ISC lead Chet Kamat was actually
              working with Anderson Consulting at that point in time. Our first
              Client was JP Morgan Chase with Ramnath leading the charge. So
              with the ATCI lead yet to join, the initial team has started
              working on Project Tiger.
            </p>
          </div>
        </div>
        <img className="bigcircleimage1" src={GROUP203}></img>
        <div style={{ display: "flex",justifyContent:'flex-start',gap:'3rem' }}>
            <div style={{width:"130px",height:'auto'}}>
            <img className="groupEmployees1" src={GROUP205}></img>
            </div>
            <div className="groupEmployeeText1" style={{width:"60%"}}>
                <p >
                It almost felt like running a startup! And Accenture's culture of "do what it takes to get things done" was wrought in that fire. Our immediate goal was to ramp up to 500 pax. And since then to an overwhelming number of 1,80,000 - contributing to the growth of Accenture has been an overwhelming and enriching experience.
                </p>
            </div>
                  <img id="burger1" className="floating" src={GROUP212}></img>

                  <img id="yellowCircle1" src={ELLIPSE15}></img>
                
                </div>
      </div>
      <div className="rightbox">
        <div className="rightContainer" >
            <div className="bhavinMehta">
                <div className="image1">
                  <img src={BHAVIN} style={{width:"100%"}}></img>
                  <img className="bhavinWhiteCirlce" src={ELLIPSE75} ></img>
                  <img className="bhavinYellowCircle" src={ELLIPSE67}></img>
                </div>
                <div className="text1">
                  <p>
                    Bhavin Mehta
                  </p>
                  <p>I was the 35th employee of India Solutions Centre and was set to flyout. At that point in time, HR called up saying that we will have to rebadge all the levels and that I would be a JSE and not SSE! And in a span of 6 months my journey started. I was picked up from the airport in a stretch limo as a welcome! That was the people building skills that our MDs have.</p>
                </div>
            </div>
            <div className="balaji">
               
                <div className="text2">
                  <p>Balaji Nagarjan</p>
                  <p>I was the 36th employee of ATCI. We started work in MDC1 which was basically a shopfloor and within a year we were all sent to U.S. and U.K. for projects and transition. We used to take everything as a challenge. Even senior people like Ramnath et al used to roll up their sleeves and get their hands dirty to run projects.</p>
                </div>
                <div className="image2">
                  <img src={BALAJI} style={{width:"100%"}}></img>
                  <img className="balajiWhiteCircle" src={ELLIPSE75} ></img>
                  <img className="balajiYellowCircle" src={ELLIPSE67}></img>
                </div>
            </div>
            <div className="anil">
                <div className="image3">
                  <img src={BALAJI} style={{width:"100%"}} alt=''/>
                  <img className="anilWhiteCircle" src={ELLIPSE75} ></img>
                  <img className="anilYellowCircle" src={ELLIPSE67}></img>
                </div>
                <div className="text3">
                  <p>Anil Jadav</p>
                  <p>My experience with Accenture started in April 1992, as part of the Facilities and Services team. I cherish the memories from the early days when I was part of the setting up of the India Offshore Delivery Centre in 2000 - 2001 in Vikhroli, Mumbai.</p>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}
