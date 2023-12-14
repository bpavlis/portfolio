import { useState, useEffect } from "react"
import footballGamePic from "../assets/group-project-1_game-screenshot.png"
import unblurredPic from "../assets/project2screenshot.png"
import logoMakerPic from "../assets/unit10finalscreenshot.png"
import employeePic from "../assets/unit12finalscreenshot.png"
import pwaPic from "../assets/unit19finalscreenshot.png"
import project3Pic from "../assets/project3screenshot.png"



export default function Portfolio(props){


  return (
    <>
      <div>
        <h1 className="pageTitle">My Portfolio</h1>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={footballGamePic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Higher-Lower Game: NFL Salaries</h2></span>A game for a user to guess which two randomly generated NFL players have the higher salary. The game will end after 3 incorrect guesses, see how high of a score you can get!</p>
        <div className="portLinkContainer">
        <a className="portLink" href="https://github.com/bpavlis/group-project-1" target="_blank">Github Link</a>
        <a className="portLink" href="https://bpavlis.github.io/group-project-1/" target="_blank">Depolyed Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={unblurredPic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Video Game Review network</h2></span>Unblurrd is a website that you can use to review some of your favorite games, and also see how others rated games. Our motivation for this project was to try and create something that each of us would potentially use in real life.</p>
        <div className="portLinkContainer">
        <a className="portLink" href="https://github.com/VictorMontelongo/Project-2-Video-Game-Reviews" target="_blank">Github Link</a>
        <a className="portLink" href="https://video-game-review-eb186ee09616.herokuapp.com/" target="_blank">Depolyed Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={project3Pic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Madlibs Mania</h2></span>Create your own madlibs and save them with our App! Upon first arrival of site youll be greeted with our animated logo and blob! Accompanied by Story examples where you can then view and add comments if you are Signed in ,You'll notice on the upper left youll see Home / Create Page / Login tabs that will redirect you to the corresponding pages.</p>
        <div className="portLinkContainer">
        <a className="portLink" href="https://github.com/KeeslingB/madlibs-gpt" target="_blank">Github Link</a>
        <a className="portLink" href="https://madlibsgpt-47c520ae93df.herokuapp.com/" target="_blank">Depolyed Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={logoMakerPic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">SVG Logo Maker</h2></span>This was an assignment for the Full-Stack program that I enjoyed completing. I created and tested a svg logo maker using npm, inquirer, fs, and jest.</p>
        <div className="portLinkContainer">
        <a className="portLink" href="https://github.com/bpavlis/svg-logo-maker" target="_blank">Github Link</a>
        <a className="portLink" href="https://drive.google.com/file/d/1x_3HcgMbaZ7KrMhU4nqSKIZVN_-Iox1P/view?usp=sharing" target="_blank">Video Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={employeePic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Employee Tracker</h2></span>This again was an assignment for the Full-Stack program that I enjoyed completing. I created a employee tracking app using npm: inquirer, express, mysql2, and jshint.</p>
        <div className="portLinkContainer">
        <a className="portLink" href="https://github.com/bpavlis/employee-tracker" target="_blank">Github Link</a>
        <a className="portLink" href="https://drive.google.com/file/d/1wu7FvLJ-jUjEyqek0VazMyz6cDlUq3om/view" target="_blank">Video Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={pwaPic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Text Editor (PWA)</h2></span>This again was an assignment for the Full-Stack program that I enjoyed completing. I created a Text Editor application to create notes/code snippets regardless of internet connectivity status. This project is using JS and npm: express, concurrently, and nodemon.</p>
        <div className="portLinkContainer">
        <a className="portLink" href="https://github.com/bpavlis/text-editor" target="_blank">Github Link</a>
        <a className="portLink" href="https://text-editor-bp-9dea36ce201f.herokuapp.com/" target="_blank">Depolyed Link</a>
        </div>
      </div>
    </>
  )
}