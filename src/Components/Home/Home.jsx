import { Link } from "react-router-dom";
import profile from "../../assets/mher.jpg"
import "./home.css"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Cv from "../../assets/Cv.pdf"
import { useState } from "react";
import ContactMe from "../Contact Me/ContactMe";

export default function Home() {

  const [contactMe, setContactMe] = useState(false)

  const [text] = useTypewriter({
    words: ['Hello There', 'Welcome To My Portfolio'],
    loop: {},

  })
  return (
    <div className="home-container">
      <img className="profile" src={profile} />
      <h3>
        <i>{text}!</i>
      </h3>
      <p className="home-about-me">I am Mher Kevorkian, a highly motivated and detail-oriented software
        engineer in developing web applications
        . My key skills include
        front-end development, JavaScript, React.Js . I am
        dedicated to delivering high-quality code and thrive in collaborative
        team environments. <br /> My goal is to continue growing as a software
        engineer and contribute to innovative projects in the tech industry
        .
      </p>
      <div className="home-btn">
        <button onClick={() => setContactMe(true)}>Contact me</button>
        <a href={Cv} download="Mher Kevorkian's Cv">Download CV</a>
      </div>
      {contactMe === false ? "" : <ContactMe setContactMe={setContactMe} />}
    </div>
  );
}
