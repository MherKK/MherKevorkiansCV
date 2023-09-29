import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
import mysql from "../../assets/mysql.png"
import ts from "../../assets/ts.png"
import "./skills.css"

export default function Skills() {
    const skills = [
        { id: 1, image: html, title: "HTML", description: "HTML (Hypertext Markup Language): HTML is a standard markup language used to create web pages and structure their content." },
        { id: 2, image: css, title: "CSS", description: "CSS (Cascading Style Sheets): CSS is a stylesheet language used to control the presentation and layout of web pages, including styling elements like colors, fonts, and spacing." },
        { id: 3, image: js, title: "JavaScript", description: " JavaScript is a versatile programming language primarily used for web development, enabling interactive and dynamic behavior on websites." },
        { id: 4, image: ts, title: "TypeScript", description: "TypeScript is a statically typed superset of JavaScript that adds optional type annotations, making it easier to catch errors and improve code quality." },
        { id: 5, image: react, title: "React.JS", description: " React.js is a JavaScript library for building user interfaces, often used for creating interactive and reusable UI components in web applications." },
        { id: 6, image: node, title: "Node.JS", description: "Node.js is a runtime environment that allows developers to run JavaScript on the server, enabling server-side scripting and building scalable network applications." },
        { id: 7, image: mysql, title: "MySQL", description: " MySQL is an open-source relational database management system (RDBMS) used to store and manage structured data, commonly used for web applications to store information." },


    ]

    return (
        <div className="skills-container">
            <h3 className="skills">Skills</h3>
            {skills.map((skill, index) => {
                return (
                    <div className={`skills${index % 2 === 0 ? 1 : 2}`}>
                        <img src={skill.image} />
                        <div>
                            <p className="skill-title">{skill.title}</p>
                            <p className="skill-description">{skill.description}</p>
                        </div>
                    </div>
                )
            })}

        </div>)
}