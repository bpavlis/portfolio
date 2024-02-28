// import { useState, useEffect } from "react"
import profilePic from "../assets/profilePic.jpg"

export default function AboutMe(){


  return (
    <>
      <div>
        <h1 className="pageTitle">About Me</h1>
      </div>
      <div className="aboutContainer">
        <img id="aboutImg" src={profilePic} style={{width: '300px'}} alt="avatar img"/>
        <p id="aboutText">Hello! I am Ben Pavlis, a 22-year-old aspiring software developer living in St. Paul, Minnesota. I graduated from Luther College in the spring of 2023 with a BA in Sociology. Although I enjoyed my time learning at this institution, I decided after to pick a new career direction. This led me to the University of Minnesota Full-Stack Web Development Program where I earned a certificate, completing the intensive bootcamp. We became proficient in many areas of programming which are listed out on the Resume page.<br/><br/>On a more personal note, I enjoy watching and playing sports (Go Bears!), gaming with friends, hanging out with family, and of course, computer programming! I hope you enjoy my site!</p>
      </div>
    </>
  )
}