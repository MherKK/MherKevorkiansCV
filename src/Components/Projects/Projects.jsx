import org from "../../assets/org.png";
import game from "../../assets/game.png";
import cv23 from "../../assets/cv23.png";
import todo from "../../assets/todo.png";
import linkblue from "../../assets/linkblue.png";
import gitblue from "../../assets/gitblue.png";
import salon from "../../assets/salon.png"
import "./projects.css"
export default function Projects() {

    let projects = [
        {
            id: 0, image: salon, title: "Beauty Salon", description: `The website is about a beauty salon, that clearly shows about salon, its staff, products and services. Also the coolest feauture is that it shows available appointments with real time database. `
            , source: "https://github.com", webLink: "https://beauty-salon-test.vercel.app", tools: "Tools I have used: React.Js, JavaScript, CSS, HTM, FireBase"
        },
        {
            id: 1, image: org, title: "Organization for cleaning Armenia's Environment", description: `The website is about an Organization that collects donations from all over the wolrd, and with that donations the Organization will organize events that will invite volunteers to help clean the environmetn.`
            , source: "https://github.com/MherKK/Diploma", webLink: "https://organizaion-for-environment.vercel.app", tools: "Tools I have used: React.Js, JavaScript, CSS, HTML, MySQL, FireBase, Node.JS"
        },
        { id: 2, image: game, title: "GameWorld", description: "The website is about games, where people can go there and search for different games from different genres with the highest ratings and so on..", source: "https://github.com/MherKK/Mhersgamingstore", webLink: "https://mhersgaming-store.vercel.app", tools: "Tools I have used: React.Ts, TypeScript, CSS, HTML, Chakra UI" },
        { id: 3, image: todo, title: "ToDo", description: "It is a TODO list where you can add,delete and complete list that you need to do.", source: "https://github.com/MherKK/todo", webLink: "https://mhers-todo.vercel.app/", tools: "Tools I have used: React.Js, JavaScript, CSS, HTML" },
        { id: 4, image: cv23, title: "My Portfolio", description: "The website is about my education,skills,projects, and achievments.", source: "https://github.com/MherKK/MherKevorkiansCV", webLink: "https://mherkevorkian.vercel.app", tools: "Tools I have used: React.Js, JavaScript, CSS, HTML" },
    ]
    console.log("Projects");

    return (
        <div className="skills-container">
            <h3 className="skills">Projects</h3>

            {projects.map((project, index) => {
                return (
                    <div key={project.id} className={`skills${index % 2 === 0 ? 1 : 2}`}>
                        <img style={{  height: '300px', borderRadius: "8px" }} src={project.image} />
                        <div>
                            <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">{project.title}</p>
                            <p>{project.description}</p>
                            <p className="tools">{project.tools}</p>
                            <div className="links-container">
                                <a href={project.source} rel="noreferrer noopener" target="_blank"><img src={gitblue} /> Source Code</a>
                                <a href={project.webLink} rel="noreferrer noopener" target="_blank"><img src={linkblue} />Website Link</a>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

