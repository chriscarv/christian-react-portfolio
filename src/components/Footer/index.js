import React from 'react';
import github from "../../assets/logos/github.png";
import linkdin from "../../assets/logos/linkd.png";
import stackover from "../../assets/logos/stack.png"

function Footer() {

    return(
        <footer>
            <ul className='flex-row space-between center'>
                <img className="f-img-thumbnail" src={github} alt="github logo"></img>
                <img className='f-img-thumbnail' src={linkdin} alt="linkdin logo"></img>
                <img className='f-img-thumbnail' src={stackover} alt="stackover flow logo"></img>
            </ul>
        </footer>
    )
}

export default Footer;