import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentPage, setCurrentPage}){
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
                        <a data-testid="about" href="#about" className={currentPage === 'About' && 'navActive' } onClick={() => setCurrentPage('About')}>About Me</a>
                    </li>
                    <li className={`mx-2`}>
                        <a data-testid="contact" href="#contact" className={currentPage === 'Contact' && 'navActive' }onClick={() => setCurrentPage('Contact')}>Contact</a>
                    </li>
                    <li className={`mx-2`}>
                        <a data-testid="about" href="#portfolio" className={currentPage === 'Portfolio' && 'navActive' } onClick={() => setCurrentPage('Portfolio')}>Portfolio</a>
                    </li>
                    <li className={`mx-2`}>
                        <a data-testid="about" href="#resume" className={currentPage === 'Resume' && 'navActive' } onClick={() => setCurrentPage('Resume')}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;