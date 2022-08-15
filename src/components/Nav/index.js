import React from 'react';

function Nav() {

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    Christian Carvajal
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about" >About Me</a>
                    </li>
                    <li className='mx-2'>
                        Portfolio
                    </li>
                    <li className='mx-2'>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;