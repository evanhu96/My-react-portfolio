
const Link = ({ page,current, setCurrent})=>{
    const lowerC = page.toLowerCase()
    return(
        <a
        style={page==current ? {color:'blue'} :{color:'black'}} 

            href= {`#${lowerC}`} 
            onClick={()=> setCurrent(`${page}`)}
            // onClick={() => console.log(current)}
        >
            {page}
        </a>
    )
}
const Navigation = ({current,setCurrent})=>{

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
                        page="About"
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
