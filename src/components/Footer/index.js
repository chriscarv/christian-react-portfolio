import React from 'react';
import github from "../../assets/logos/github.png";
import linkdin from "../../assets/logos/linkd.png";
import stackover from "../../assets/logos/stack.png"

function Footer() {

    return(
        <footer>
            <ul className='flex-row space-between center'>
                <a href="https://github.com/chriscarv" target="_blank" rel="noreferrer">
                <img className="f-img-thumbnail" src={github} alt="github logo"></img>
                </a>
                <a href="https://www.linkedin.com/in/christian-carvajal-48604018b/" target="_blank" rel="noreferrer">
                <img className='f-img-thumbnail' src={linkdin} alt="linkdin logo"></img>
                </a>
                <a href="https://stackoverflow.com/users/18301641/christian-carvajal" target="_blank" rel="noreferrer">
                <img className='f-img-thumbnail' src={stackover} alt="stackover flow logo"></img>
                </a>
            </ul>
        </footer>
    )
}

export default Footer;