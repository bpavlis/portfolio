// import { useState, useEffect } from "react"
import footballGamePic from "../assets/group-project-1_game-screenshot.png"
import unblurredPic from "../assets/project2screenshot.png"
import logoMakerPic from "../assets/unit10finalscreenshot.png"
import employeePic from "../assets/unit12finalscreenshot.png"
import pwaPic from "../assets/unit19finalscreenshot.png"
import project3Pic from "../assets/project3screenshot.png"
import codAppPic from "../assets/codAppScreenshot1.png"
import smbPortPic from "../assets/smbPortPic.png"
import seniorProjectPDF from "../assets/seniorProjectPDF.pdf"
import seniorProjectPNG from "../assets/seniorProjectPNG.png"



export default function Portfolio(){


  return (
    <>
      <div>
        <h1 className="pageTitle">My Portfolio</h1>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={smbPortPic} style={{ width: '300px' }} alt="avatar img" />
        <p id="portText"><span><h2 className="githubTitle">Sweet Marie Blooms</h2></span>New small business, Sweet Marie Blooms, commissioned a floral website designed and developed using Squarespace, HTML, CSS, and JavaScript while keeping in mind SEO best practices. The website captures the essence of Sweet Marie&apos;s unique floral arrangements, offering a seamless online experience for visitors to explore and purchase blooms for any occasion.</p>
        <div className="portLinkContainer">
          <a className="portLink" href="https://sweetmarieblooms.com/" target="_blank" rel="noreferrer">Site Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={footballGamePic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Higher-Lower Game: NFL Salaries</h2></span>A game for a user to guess which two randomly generated NFL players have the higher salary. The game will end after 3 incorrect guesses, see how high of a score you can get!</p>
        <div className="portLinkContainer">
        <a className="portLink" href="https://github.com/bpavlis/group-project-1" target="_blank" rel="noreferrer">Github Link</a>
          <a className="portLink" href="https://bpavlis.github.io/group-project-1/" target="_blank" rel="noreferrer">Depolyed Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={unblurredPic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Video Game Review network</h2></span>Unblurrd is a website that you can use to review some of your favorite games, and also see how others rated games. Our motivation for this project was to try and create something that each of us would potentially use in real life.</p>
        <div className="portLinkContainer">
          <a className="portLink" href="https://github.com/VictorMontelongo/Project-2-Video-Game-Reviews" target="_blank" rel="noreferrer">Github Link</a>
          <a className="portLink" href="https://video-game-review-eb186ee09616.herokuapp.com/" target="_blank" rel="noreferrer">Depolyed Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={project3Pic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Madlibs Mania</h2></span>Create your own madlibs and save them with our App! Upon first arrival of site youll be greeted with our animated logo and blob which is accompanied by story examples where you can then view and add comments if you are signed in. You will notice on the upper left you can also see Home / Create Page / Login tabs that will redirect you to the corresponding pages.</p>
        <div className="portLinkContainer">
          <a className="portLink" href="https://github.com/KeeslingB/madlibs-gpt" target="_blank" rel="noreferrer">Github Link</a>
          <a className="portLink" href="https://madlibsgpt-47c520ae93df.herokuapp.com/" target="_blank" rel="noreferrer">Depolyed Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={codAppPic} style={{ width: '300px' }} alt="avatar img" />
        <p id="portText"><span><h2 className="githubTitle">Call of Duty Stat Tracking App</h2></span>This is an application designed to track Call of Duty statistics for a team of 4 players.Currently, the application is hard-coded to only be used for a specific team of 4 players. In the future there are plans to expand so users can create and join their own teams with their own usernames. The tech stack includes but is not limited to HTML, CSS, JS, express, mongoose, bootstrap, react, and more.</p>
        <div className="portLinkContainer">
          <a className="portLink" href="https://github.com/bpavlis/codApp" target="_blank" rel="noreferrer">Github Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={logoMakerPic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">SVG Logo Maker</h2></span>This was an assignment for the Full-Stack program that I enjoyed completing. I created and tested a svg logo maker using npm, inquirer, fs, and jest.</p>
        <div className="portLinkContainer">
          <a className="portLink" href="https://github.com/bpavlis/svg-logo-maker" target="_blank" rel="noreferrer">Github Link</a>
          <a className="portLink" href="https://drive.google.com/file/d/1x_3HcgMbaZ7KrMhU4nqSKIZVN_-Iox1P/view?usp=sharing" target="_blank" rel="noreferrer">Video Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={employeePic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Employee Tracker</h2></span>This again was an assignment for the Full-Stack program that I enjoyed completing. I created a employee tracking app using npm: inquirer, express, mysql2, and jshint.</p>
        <div className="portLinkContainer">
          <a className="portLink" href="https://github.com/bpavlis/employee-tracker" target="_blank" rel="noreferrer">Github Link</a>
          <a className="portLink" href="https://drive.google.com/file/d/1wu7FvLJ-jUjEyqek0VazMyz6cDlUq3om/view" target="_blank" rel="noreferrer">Video Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={pwaPic} style={{width: '300px'}} alt="avatar img"/>
        <p id="portText"><span><h2 className="githubTitle">Text Editor (PWA)</h2></span>This again was an assignment for the Full-Stack program that I enjoyed completing. I created a Text Editor application to create notes/code snippets regardless of internet connectivity status. This project is using JS and npm: express, concurrently, and nodemon.</p>
        <div className="portLinkContainer">
          <a className="portLink" href="https://github.com/bpavlis/text-editor" target="_blank" rel="noreferrer">Github Link</a>
          <a className="portLink" href="https://text-editor-bp-9dea36ce201f.herokuapp.com/" target="_blank" rel="noreferrer">Depolyed Link</a>
        </div>
      </div>
      <div className="aboutContainer">
        <img id="portImg" src={seniorProjectPNG} style={{ width: '300px' }} alt="avatar img" />
        <p id="portText"><span><h2 className="githubTitle">Senior Project 2023</h2></span>The title of my Luther College Senior Project: Societal Analysis of Online Discourse Surrounding Female Athletes. This project will help others to get a sense of my personal writing style and interests outside the world of computer coding.</p>
        <div className="portLinkContainer">
          <a className="portLink" href={seniorProjectPDF} target="_blank" rel="noreferrer">Paper Link</a>
        </div>
      </div>
    </>
  )
}