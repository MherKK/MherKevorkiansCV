import jsbasic from "../../assets/jsbasic.jpg"
import jsinter from "../../assets/jsintermediate.jpg";
import school from "../../assets/school.jpg"
import university from "../../assets/university.jpg"

import "..//Skills/skills.css"

export default function Achievments() {
    return (
        <div className="skills-container">
            <h3 className="skills">Achievments</h3>

            <div className="skills1">
                <img style={{ width: '400px', height: '300px' }} src={university} />
                <div>
                    <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">Bachelor's Degree in Information Technology</p>
                </div>
            </div>

            <div className="skills2">
                <img style={{ width: '400px', height: '300px' }} src={school} />
                <div>
                    <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">High School </p>
                </div>
            </div>

            <div className="skills1">
                <img style={{ width: '400px', height: '300px' }} src={jsbasic} />
                <div>
                    <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">JavaScript(Basic)Certificate</p>
                </div>
            </div>

            <div className="skills2">
                <img style={{ width: '400px', height: '300px' }} src={jsinter} />
                <div>
                    <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">JavaScript(Intermediate)Certificate</p>
                </div>
            </div>
        </div>
    )
}