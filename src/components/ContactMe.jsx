import { useState, useEffect } from "react"
// import './App.css'

export default function ContactMe(props){
  const [userData, setUserData] = useState("")
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userMessage, setUserMessage] = useState("")

  function handleInputChange(e){
    setUserData({...userData, [e.target.name]: e.target.value })
  }

  async function handleFormSubmit(e){
    e.preventDefault()

  }


  return (
    <>
      <div>
        <h1 className="pageTitle">Contact Me</h1>
      </div>
      <div className="aboutContainer">
      <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <div>
            <div>
              <label className="d-block">Name: </label>
              <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">Email: </label>
              <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">Message: </label>
              <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
            </div>
          </div>

          <button className="mt-2">Submit Info</button>
        </div>
      </form>
    </div>
      </div>
    </>
  )
}