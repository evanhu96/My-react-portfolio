import resume from '../assets/Resume.pdf'

const Resume = () =>{
    return(
        <div>
        <a class="btn line-btn-dark btn-icon btn-radius" href={resume} title="resume" download>Download Resume Here</a>
        <h1>Front End Skills</h1>
        <ul id="resume">
            <il id="resumeItem">React</il>
            <il id="resumeItem">CSS</il>
            <il id="resumeItem">Bootstrap</il>
    
        </ul>
        <h1>Back End Skills</h1>
    
        <ul id="resume">
            <il id="resumeItem">Node</il>
            <il id="resumeItem">Python</il>
            <il id="resumeItem">MongoDB</il>
            <il id="resumeItem">MySql</il>
        </ul>
    
        </div>
    )
}

export default Resume