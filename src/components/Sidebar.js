import React from 'react'
import {Link} from "react-router-dom";
import {navLinks} from '../utils/constants';
import {useAppContext} from '../context/app_context';
import {FaTimes} from 'react-icons/fa';




const Sidebar = () => {

    const {isSidebarOpen, CloseSidebar} = useAppContext();
    // console.log(isSidebarOpen)

    return (<>
    <aside className={`${isSidebarOpen ? 'showsidebar' : 'sidebar'}`}>

            <ul className="links">
                {navLinks.map((item)=>{

                    return (<li key={item.id}>
                        <Link to={item.url} onClick={CloseSidebar}>
                            {item.text}
                        </Link>

                    </li>);
                })
                }
            </ul>

    </aside>
    

    <div className="button-container">
                <button className="close-btn" type="button" onClick={CloseSidebar}>
                    <FaTimes/>
                </button>
            </div>
    </>
        
    )
}

export default Sidebar;
