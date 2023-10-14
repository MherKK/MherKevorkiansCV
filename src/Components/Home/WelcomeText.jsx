import { useTypewriter } from "react-simple-typewriter";




export default function WelcomeText() {

    const [text] = useTypewriter({
        words: ['Hello There', 'Welcome To My Portfolio'],
        loop: {},

    })
    return <i>{text}!</i>
}