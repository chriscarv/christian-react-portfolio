import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props){
    const{
        contactSelected,
        setContactSelected
    } = props;
    return(
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span>Christian Carvajal</span>
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a data-testid="about" href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;