import jsbasic from "../../assets/jsbasic.jpg"
import jsinter from "../../assets/jsintermediate.jpg";
import school from "../../assets/school.jpg"
import university from "../../assets/university.jpg"

import "..//Skills/skills.css"

export default function Achievments() {

    let achievments = [
        { id: 1, achievment: university, title: "Bachelor's Degree in Information Technology" },
        { id: 2, achievment: school, title: "High School" },
        { id: 3, achievment: jsbasic, title: "JavaScript(Basic)Certificate" },
        { id: 4, achievment: jsinter, title: "JavaScript(Intermediate) Certificate" }
    ]

    return (
        <div className="skills-container">
            <h3 className="skills">Achievments</h3>
            {achievments.map((achievs, index) => {
                return (
                    <div key={achievs.id} className={`skills${index % 2 === 0 ? 1 : 2}`}>
                        <img style={{ height: '300px' }} src={achievs.achievment} />
                        <div>
                            <p style={{ fontSize: '21px', marginTop: '-10px' }} className="skill-title">{achievs.title}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}