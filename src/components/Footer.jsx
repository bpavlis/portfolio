import githubLogo from "../assets/githubLogo.png"
import linkedinLogo from "../assets/linkedinLogo.png"
import instaLogo from "../assets/instaLogo.png"


export default function Footer(props) {


  return (
    <>
      <footer>
          <a href="https://github.com/bpavlis"><img className="linkLogo" src={githubLogo} alt="GitHub Link" /></a>
          <a href="https://www.linkedin.com/in/benjamin-pavlis-7282492a0/"><img className="linkLogo" src={linkedinLogo} alt="LinkedIn Link" /></a>
          <a href="https://www.instagram.com/pavdawg/"><img className="linkLogo" src={instaLogo} alt="Instagram Link" /></a>
      </footer>
    </>
  )
}