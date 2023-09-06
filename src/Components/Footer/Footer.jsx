import "./footer.css"
import linkedIn from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import github from "../../assets/github.png"

export default function Footer() {

    let linkedInURL = "https://www.linkedin.com/in/mher-kevorkian";
    let githubURL = "https://github.com/MherKk";
    let instagramURL = "https://www.instagram.com/mherkevorkian_"
    return (
        <div className="footer-container">
            <ul>
                <li>
                    <img src={linkedIn} />
                    <a href={linkedInURL} rel="noreferrer noopener" target="_blank" >Linked-In</a>
                </li>
                <li>
                    <img src={github} />
                    <a href={githubURL} rel="noreferrer noopener" target="_blank">Git-hub</a>
                </li>
                <li>
                    <img style={{ width: '30px', marginRight: "-5px" }} src={instagram} />
                    <a href={instagramURL} rel="noreferrer noopener" target="_blank">Instagram</a>
                </li>
            </ul>
            <p> &copy; 2023 All rights reserved, Mher kevorkian</p>
        </div>
    )
}