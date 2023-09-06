import HTML from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
import mysql from "../../assets/mysql.png"
import ts from "../../assets/ts.png"
import "./skills.css"

export default function Skills() {

    return (
        <div className="skills-container">
            <h3 className="skills">Skills</h3>
            <div className="skills1">
                <img src={HTML} />
                <div>
                    <p className="skill-title">HTML</p>
                    <p className="skill-description"> HTML (Hypertext Markup Language): HTML is a standard markup language used to create web pages and structure their content.</p>
                </div>
            </div>
            <div className="skills2">
                <img src={css} />
                <div>
                    <p className="skill-title">CSS</p>
                    <p className="skill-description">CSS (Cascading Style Sheets): CSS is a stylesheet language used to control the presentation and layout of web pages, including styling elements like colors, fonts, and spacing.</p>
                </div>
            </div>
            <div className="skills1">
                <img src={js} />
                <div>
                    <p className="skill-title">JavaScript</p>
                    <p className="skill-description"> JavaScript is a versatile programming language primarily used for web development, enabling interactive and dynamic behavior on websites.</p>
                </div>
            </div>
            <div className="skills2">
                <img src={react} />
                <div>
                    <p className="skill-title">React.JS</p>
                    <p className="skill-description"> React.js is a JavaScript library for building user interfaces, often used for creating interactive and reusable UI components in web applications.</p>
                </div>
            </div>
            <div className="skills1">
                <img src={ts} />
                <div>
                    <p className="skill-title">TypeScript</p>
                    <p className="skill-description">TypeScript is a statically typed superset of JavaScript that adds optional type annotations, making it easier to catch errors and improve code quality.</p>
                </div>
            </div>
            <div className="skills2">
                <img src={node} />
                <div>
                    <p className="skill-title">Node.JS</p>
                    <p className="skill-description"> Node.js is a runtime environment that allows developers to run JavaScript on the server, enabling server-side scripting and building scalable network applications.</p>
                </div>
            </div>
            <div className="skills1">
                <img src={mysql} />
                <div>
                    <p className="skill-title">MySQL</p>
                    <p className="skill-description"> MySQL is an open-source relational database management system (RDBMS) used to store and manage structured data, commonly used for web applications to store information.</p>
                </div>
            </div>
        </div>)
}