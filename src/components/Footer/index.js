import React from 'react';
import github from "../../assets/logos/github.png";
import linkdin from "../../assets/logos/linkd.png";
import stackover from "../../assets/logos/stack.png"

function Footer() {

    return(
        <footer className="flex-row">
            <ul className='flex-row px-1 space-between center'>
                <img className="f-img-thumbnail" src={github}></img>
                <img className='f-img-thumbnail' src={linkdin}></img>
                <img className='f-img-thumbnail' src={stackover}></img>
            </ul>
        </footer>
    )
}

export default Footer;