// import { useState, useEffect } from "react"
import resume from '../assets/BenjaminPavlisResume2024.pdf'
import cloudImg from '../assets/cloud.png'

export default function Resume() {


  return (
    <>
      <div>
        <h1 className="pageTitle">My Resume</h1>
      </div>
      <div className="downloadResContainer">
        <h2>Click Here To Download My Resume:</h2>
        <a href={resume} download><img className="resImg" src={cloudImg} alt="Download my resume here!" /></a>
      </div>
      <h2 className="profTitle">Check out my developer proficiencies:</h2>
      <div className="resContainer">
        <div className="frontEnd">
          <h2>Front-End</h2>
          <p>HTML5<br />CSS<br />JavaScript<br />API Work<br />Bootstrap<br />Handlebars<br />GIT</p>
        </div>
        <div className="backEnd">
          <h2>Back-End</h2>
          <p>Express<br />MySQL<br />Node<br />Sequelize<br />Jest<br />ORM<br />MVC</p>
        </div>
        <div className="performence">
          <h2>Performence</h2>
          <p>React<br />NoSQL<br />Mongoose<br />MongoDB<br />PWA<br />GraphQL<br />MERN<br />State</p>
        </div>
      </div>
    </>
  )
}