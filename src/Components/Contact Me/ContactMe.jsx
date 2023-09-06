import "./contactme.css"
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import close from "../../assets/close.png"
export default function ContactUs({ setContactMe }) {

    const ulRef = useRef();

    useEffect(() => {
        let hadnler = (e) => {
            if (!ulRef.current.contains(e.target)) {
                setContactMe(false)
                document.body.style.overflowY = "visible"
            }
        }
        document.addEventListener("mousedown", hadnler)

        return () => {
            document.removeEventListener("mousedown", hadnler);
        }
    })

    let form = useRef();
    let [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    let [display, setDisplay] = useState("none");

    function sendEmail(e) {
        e.preventDefault();

        if (contactDetails.email !== "" || contactDetails.message !== "" || contactDetails.message !== "" || contactDetails.subject !== "") {
            emailjs.sendForm(
                "service_j8cdtsl",
                "template_onx3wyr",
                form.current,
                "ykFWn9XZoUGD_o_ix"
            ).then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            )
            setContactDetails({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
            setDisplay("none")
            setContactMe(false)
        } else {
            setDisplay("block")
        }
    }
    return (
        <div className="contact-Me">
            <div ref={ulRef} className="contact-Me_form-container">
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}><p>Contact Me</p>
                    <img style={{ cursor: "pointer", width: "40px", height: "40px" }} onClick={() => {
                        document.body.style.overflowY = "visible"
                        setContactMe(false)
                    }} src={close} />
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-Me_form">
                    <div id="input-ne">
                        <label>Full Name *</label>
                        <input value={contactDetails.name} onChange={(e) => {
                            setContactDetails({ ...contactDetails, name: e.target.value })
                        }} type="text" name="user_name" placeholder="Full Name" />
                    </div>
                    <div id="input-ne">
                        <label>Email Address *</label>
                        <input value={contactDetails.email} onChange={(e) => {
                            setContactDetails({ ...contactDetails, email: e.target.value })
                        }} type="email" name="user_email" placeholder="Email Address" />
                    </div>
                    <div>
                        <label>Subject *</label>
                        <input value={contactDetails.subject} onChange={(e) => {
                            setContactDetails({ ...contactDetails, subject: e.target.value })
                        }} id="subject" type="text" name="from_name" placeholder="Subject" />
                    </div>
                    <div>
                        <label>Message *</label>
                        <textarea value={contactDetails.message} onChange={(e) => {
                            setContactDetails({ ...contactDetails, message: e.target.value })
                        }} name="message" className="textarea"></textarea>
                        <div className="required">* indicates a required field</div>
                    </div>
                    <button type="submit" value="Send">SUBMIT</button>
                </form>
                <p style={{ color: "red", display: display, fontSize: "14px" }}>Please fill all the required fields</p>
            </div>

        </div>
    )
}