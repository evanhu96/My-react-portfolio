import linkedin from '../assets/linkedin.png' 
import instagram from '../assets/instagram.png' 
import facebook from '../assets/facebook.png' 

const Footer = () =>{
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/evan-hughes-98b12412a/"><img src={linkedin} alt="linkedin"/>
            </a>
            <a href="https://www.facebook.com/"><img src={facebook} alt="facebook"/>
            </a>
            <a href="https://github.com/evanhu96"><img src={instagram} alt="instagram"/>
            </a>
  
        </div>
    )
}
export default Footer