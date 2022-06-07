import React from 'react';
import {navLinks} from '../utils/constants';
import {Link} from 'react-router-dom';
import {FaHamburger} from 'react-icons/fa';
import {CgGames} from 'react-icons/cg';
import {useAppContext} from '../context/app_context';


const Navbar = () => {

    const {OpenSidebar} = useAppContext();
    
    return (
        <header>
            <nav className="navbar">
                <div className="logo"><CgGames/></div>
                <div>
                    <ul className="links">
                        {navLinks.map((item)=>{

                            return (<li key={item.id}>
                                <Link to={item.url}>
                                    {item.text}
                                </Link>

                            </li>);
                        })
                        }
                    </ul>
                </div>

                <div className="social">social icons</div>

                <div className="button-container">
                    <button className="open-btn" type="button" onClick={OpenSidebar}>
                        <FaHamburger/>
                    </button>
                </div>
                
            </nav>
        </header>
    )
}

export default Navbar;
