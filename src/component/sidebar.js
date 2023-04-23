import React from 'react';
import "../App.css";
import { SidebarData } from './SidebarData';

function Sidebar ( ) {
    return (
         <div className="Sidebar">
        <ul className='SidebarList'>
{SidebarData.map((val, key) => {
    return <li className='row'   onClick={() =>{window.location.pathname = val.link}}>HI</li>;
    
} ) }
        </ul>
</div>
    );
}
export default Sidebar;