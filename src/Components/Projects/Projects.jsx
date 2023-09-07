import org from "../../assets/org.png";
import game from "../../assets/game.png";
import cv23 from "../../assets/cv23.png";
import linkblue from "../../assets/linkblue.png";
import gitblue from "../../assets/gitblue.png";
import "./projects.css"
export default function Projects() {
    return (
        <div className="skills-container">
            <h3 className="skills">Projects</h3>
            <div className="skills1">
                <img style={{ width: '400px', height: '300px', borderRadius: "8px" }} src={org} />
                <div>
                    <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">Organization for cleaning Armenia's Environment</p>
                    <p>The website is about an Organization that collects donations from all over the wolrd, and with that donations the Organization will organize events that will invite volunteers to help clean the environmetn.</p>
                    <p className="tools">Tools I have used: React.Js, JavaScript, CSS, HTML, MySQL, FireBase, Node.JS</p>
                    <div className="links-container">
                        <a href="https://github.com/MherKK/Diploma" rel="noreferrer noopener" target="_blank"><img src={gitblue} /> Source Code</a>
                        <a href="https://organizaion-for-environment.vercel.app" rel="noreferrer noopener" target="_blank"><img src={linkblue} />Website Link</a>
                    </div>
                </div>
            </div>

            <div className="skills2">
                <img style={{ width: '400px', height: '300px', borderRadius: "8px" }} src={game} />
                <div>
                    <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">GameWorld</p>
                    <p>The website is about games, where people can go there and search for different games from different genres with the highest ratings and so on..</p>
                    <p className="tools">Tools I have used: React.Js, TypeScript, Chakra UI, HTML</p>
                    <div className="links-container">
                        <a href="https://github.com/MherKK/Mhersgamingstore" rel="noreferrer noopener" target="_blank"><img src={gitblue} /> Source Code</a>
                        <a href="https://mhersgaming-store.vercel.app" rel="noreferrer noopener" target="_blank"><img src={linkblue} />Website Link</a>
                    </div>
                </div>
            </div>

            <div className="skills1">
                <img style={{ width: '400px', height: '300px', borderRadius: "8px" }} src={cv23} />
                <div>
                    <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">My Portfolio</p>
                    <p>The website is about my education,skills,projects, and achievments.</p>
                    <p className="tools">Tools I have used: React.Js, JavaScript, CSS, HTML</p>
                    <div className="links-container">
                        <a href="https://github.com/MherKK/MherKevorkiansCV" rel="noreferrer noopener" target="_blank"><img src={gitblue} /> Source Code</a>
                        <a href="https://mherkevorkian.vercel.app" rel="noreferrer noopener" target="_blank"><img src={linkblue} />Website Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}