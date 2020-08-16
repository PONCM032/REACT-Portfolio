import React from "react";
import "../../pages/styles/Style.css"
import profile from "../image/croppedProfileImage.JPG"

const About = () => (    
    <div className="container">
      <br/>
      <br/>
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <img src={profile} alt="profileimage" />
        </div>
        <div className="col-lg-8 text-center mt-4" style={{ color: "whitesmoke" }}>
          <p>Born in Peru, Melanie immigrated to the United States where she currently resides. If asked about her dreams and aspirations, she will state that "quarter life crisis is hard" and that "finding an aspiration when [she] was younger was difficult because of the endless loop of overachievements [she] had to keep up since being an example immigrant child didn't allow [her] to think outside the box. Her favorite things to do during the quaratine are worrying about her career prospects, playing Animal Crossing: New Horizons in the Nintendo Switch, and watching The Untamed in Netflix.</p>
        </div>
        <div className="col-12 text-center">
          <h1 style={{ color: "whitesmoke" }}><span>Melanie de Maria Ponce Villanueva</span></h1>
        </div>
      </div>
    </div>
  
);

export default About;
