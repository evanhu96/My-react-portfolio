import selfie from "../assets/selfie.jpg"

const About = () => {
    return(
        <div>
            <h1>About Me</h1>
            <img src={selfie} id='selfie'></img>
            <p>
            I am a 26 year old Denver University coding bootcamp student. I have a great passion for programming and love the endless ideas that can come from a solid knowledge of programming and its languages. Aside from the I enjoy the spending time in the outdoors and exercising during my free-time. Finally I have a dog named Emma and anytime I am not working I am most likely hanging out with her            </p>
        </div>
    )
}
export default About