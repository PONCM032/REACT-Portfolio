import React from "react";
import "../../pages/styles/Style.css";
import CoronaImg from "../image/Quest_of_Corona.png"
import BrewImg from "../image/Brew4UHeader.png"
import ReadMe from "../image/ReadMe.png"
import PassGen from "../image/PassGen.png"
import Quiz from "../image/Quiz.png"


const Blog = () => (
 <div>
   <br/>
    <div uk-grid className="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s uk-text-righ uk-margin-medium"
            id="portfolioDiv">
            <div className="uk-card uk-card-default uk-width-1-2@m uk-margin-medium">
                <div className="uk-card-media-top">
                    <img src={CoronaImg} alt="" />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">Quest of Corona</h3>
                    <p>
                        Group project - RPG game. Worked with HTML and CSS styling by using new CSS framework - RPGUI. Deployed on Heroku.
                    </p>
                </div>
                <div className="uk-card-footer">
                    <a href="https://bcs-project-2.herokuapp.com/"
                        className="uk-button uk-button-text">Visit Site</a>
                </div>
                <div className="uk-card-footer">
                    <a href="https://github.com/AbbyNeko/Quest-of-Corona"
                        className="uk-button uk-button-text">Visit Github</a>
                </div>
            </div>
            <div className="uk-card uk-card-default uk-width-1-2@m uk-margin-medium">
                <div className="uk-card-media-top">
                    <img src={BrewImg} alt="" />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">Brew For You</h3>
                    <p>
                        Group project - worked mainly in HTML and CSS styling. Partnered
                        with team to create functionality in website.
                    </p>
                </div>
                <div className="uk-card-footer">
                    <a href="https://eunahk92.github.io/brew-for-you/"
                        className="uk-button uk-button-text">Visit Site</a>
                </div>
                <div className="uk-card-footer">
                    <a href="https://github.com/eunahk92/brew-for-you"
                        className="uk-button uk-button-text">Visit Github</a>
                </div>
            </div>
            <div className="uk-card uk-card-default uk-width-1-2@m uk-margin-medium">
                <div className="uk-card-media-top">
                    <img src={PassGen} alt="" />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">Password Generator</h3>
                    <p>
                        Creates a randomized string acquired from user confirms to output a
                        password
                    </p>
                </div>
                <div className="uk-card-footer">
                    <a href="https://poncm032.github.io/Password-Generator"
                        className="uk-button uk-button-text">Visit Site</a>
                </div>
                <div className="uk-card-footer">
                    <a href="https://github.com/PONCM032/Password-Generator"
                        className="uk-button uk-button-text">Visit Github</a>
                </div>
            </div>
            <div className="uk-card uk-card-default uk-width-1-2@m uk-margin-medium">
                <div className="uk-card-media-top">
                    <img src={ReadMe} alt="" />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">ReadMe Generator</h3>
                    <p>
                        From user input, creates a README.md file. Link goes to project
                        repository
                    </p>
                </div>
                <div className="uk-card-footer">
                    <a href="https://github.com/PONCM032/Good-Readme-Generator"
                        className="uk-button uk-button-text">Visit Github</a>
                </div>
            </div>
            <div className="uk-card uk-card-default uk-width-1-2@m uk-margin-medium">
                <div className="uk-card-media-top">
                    <img src={Quiz} alt="" />
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">Quiz Time!</h3>
                    <p>
                        Play a short Quiz game - but be careful! You have 60 seconds to
                        finish before the timer runs out.
                    </p>
                </div>
                <div className="uk-card-footer">
                    <a href="https://poncm032.github.io/Quiz-Loop/index.html"
                        className="uk-button uk-button-text">Visit Site</a>
                </div>
                <div className="uk-card-footer">
                    <a href="https://github.com/PONCM032/Quiz-Loop"
                        className="uk-button uk-button-text">Visit Github</a>
                </div>
            </div>
        </div> 
  </div>
);

export default Blog;
