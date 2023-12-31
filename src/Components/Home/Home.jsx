import profile from "../../assets/mher.jpg"
import "./home.css"
import Cv from "../../assets/Cv.pdf"
import { useState } from "react";
import ContactMe from "../Contact Me/ContactMe";
import WelcomeText from "./WelcomeText";
import { Analytics } from '@vercel/analytics/react';
export default function Home() {

  const [contactMe, setContactMe] = useState(false)

  return (
    <div className="home-container">
      <img className="profile" src={profile} />
      <h3>
        <WelcomeText />
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
      <Analytics />
      <div className="home-btn">
        <button onClick={() => {
          document.body.scrollTop = 0 //this is for safari
          document.documentElement.scrollTop = 0 // this is for chrome firefox...
          document.body.style.overflowY = 'hidden'
          setContactMe(true)

        }}>Contact me</button>
        <a href={Cv} download="Mher Kevorkian's Cv">Download CV</a>
      </div>
      {contactMe === false ? "" : <ContactMe setContactMe={setContactMe} />}
    </div>
  );
}
