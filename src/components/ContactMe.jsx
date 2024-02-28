import { useState } from "react"

export default function ContactMe() {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [error, setError] = useState("")

  function handleInputChange(e) {
    const { target } = e;
    const inType = target.name;
    const inValue = target.value;
    if (inType === "userEmail") {
      setUserEmail(inValue)
    } else if (inType === "userName") {
      setUserName(inValue)
    } else {
      setUserMessage(inValue)
    }
  }

  function validateEmail(email) {
    var validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return validate.test(String(email).toLowerCase())
  }
  async function handleFormSubmit(e) {
    e.preventDefault()

    if (!validateEmail(userEmail) || !userName || !userMessage) {
      setError("[ Invalid: Make sure you entered the right name, email, and message! ]")
      return
    } else {
      setError("")
    }
    setUserName("")
    setUserEmail("")
    setUserMessage("")
  }


  return (
    <>
      {/* <div>
        <h1 className="pageTitle">Contact Me</h1>
      </div>
      <div className='inputContainer'>
        <input className='inputBox' type="text" name="userName" placeholder="Enter Your Name" value={userName} onChange={handleInputChange} />
        <input className='inputBox' type="email" name="userEmail" placeholder="Enter Your Email" value={userEmail} onChange={handleInputChange} />
        <textarea className='inputMessage' type="message" name="userMessage" placeholder="Enter A Message" value={userMessage} onChange={handleInputChange} />
        <button className='inputButton' onClick={handleFormSubmit}>Submit</button>
      </div>
      {error && (
        <div>
          <p className="errorText">{error}</p>
        </div>
      )} */}
      <div>
        <h1 className="pageTitle">My Info</h1>
      </div>
      <p className="infoText"><b>Phone: </b><a className="infoLink" href="tel:6513330437">651-333-0437</a><br/><b>Email: </b><a className="infoLink" href="mailto:benpavlis@gmail.com">benpavlis@gmail.com</a><br/>Click the icons below for GitHub, LinkedIn, and Instagram</p>
    </>
  )
}