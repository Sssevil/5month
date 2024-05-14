import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/post'>post</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;