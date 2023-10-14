import profile from "../../assets/mher.jpg"
import "./aboutme.css"
import email from "../../assets/email.png"
import phone from "../../assets/phone.png"
import address from "../../assets/addresss.png"

export default function AboutMe() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      <h2 className="about-me-h3">About me</h2>
      <div className="aboutme-container">

        <div className="about-me-top">

          <img className="profile" src={profile} />
          <a href="mailto : mherkevorkian99@gmail.com"><img src={email} />Mherkevorkian99@gmail.com</a>
          <a href="tel: +374 95 152157"><img src={phone} />+374 (95) 152-157</a>
          <a href="https://maps.app.goo.gl/XBmvWGpV5Ui6HdGPA"><img src={address} /> Yerevan,Armenia</a>
        </div>

        <div className="details-container">
          <div className="about-me-details">
            <h3>Education</h3>
            <div>
              <div>
                <p>European University Of Armenia</p>
                <p className="place">Yerevan,Armenia</p>
              </div>
              <div className="degree">
                <p>Master's degree in Information Technology</p>
                <p>Sep 2023 - Present</p>
              </div>
            </div>
            <div>
              <div>
                <p>European University Of Armenia</p>
                <p className="place">Yerevan,Armenia</p>
              </div>
              <div className="degree">
                <p>Bachelor's degree in Information Technology</p>
                <p>Sep 2019 - May 2023</p>
              </div>
            </div>
            <div>
              <div>
                <p>EPAM Armenia</p>
                <p className="place">Yerevan,Armenia</p>
              </div>
              <div className="degree">
                <p>Online JavaScript course training</p>
                <p>Feb 2022 - Aug 2022</p>
              </div>
            </div>
            <div>
              <div>
                <p>Armenian Secondary School</p>
                <p className="place">Yerevan,Armenia</p>
              </div>
              <div className="degree">
                <p>High School Diploma</p>
                <p>Sep 2014 - June 2017</p>
              </div>
            </div>
          </div>

          <div className="about-me-details">
            <h3>Soft Skills</h3>
            <p>Fast Learner</p>
            <p>Good Communication Skills</p>
            <p>Time Management</p>
            <p>Researcher</p>
          </div>

          <div className="about-me-details">
            <h3>Languages</h3>
            <p>Armenian:
              <span className="star-blue" >&#9733;&#9733;&#9733;&#9733;&#9733;</span>

            </p>
            <p>English: <span className="star-blue" >&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
            <p>Arabic:
              <span className="star-blue" >&#9733;&#9733;&#9733;&#9734;&#9734;</span>
              <span style={{ fontSize: "30px" }}></span>
            </p>
          </div>


        </div>
      </div>
    </div>
  )
}
