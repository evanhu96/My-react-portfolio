import AnchorLink from "react-anchor-link-smooth-scroll"

const Link = ({ page,current, setCurrent})=>{
    const lowerC = page.toLowerCase()
    return(
        <AnchorLink 
        style={page==lowerC ? {color:'blue'} :{color:'black'}} 

            href= {`#${lowerC}`} 
            onClick={() => setCurrent(lowerC)}
        >
            {page}
        </AnchorLink>
    )
}
const Navigation = ({current,setCurrent})=>{
    // const navigationBackground = "bg-red"

    return(
        <nav style={{backgroundColor:'red'}}>
            <div className="header">
                <h4>Evan Hughes</h4>
                {/* desktop nav */}
                    <div className="headerLinks">
                        <Link
                        className="headerLink"
                        setCurrent={setCurrent}
                        current={current}
                        page="about"
                        />
                        <Link
                        className="headerLink"
                        setCurrent={setCurrent}
                        current={current}
                        page="Projects"
                        />

                        <Link
                        className="headerLink"
                        setCurrent={setCurrent}
                        current={current}
                        page="Contact"
                        />
                        <Link
                        className="headerLink"
                        setCurrent={setCurrent}
                        current={current}
                        page="Resume"
                        />
                    </div>
            </div>
        </nav>
    )
}
export default Navigation;
