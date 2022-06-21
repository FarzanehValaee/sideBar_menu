import React,{useState, useEffect} from 'react';
import LOGO from '../assets/LOGO/travel-logo-vector-19189674.jpg';
import AVATAR from '../assets/avatar1.png';
import LOGO2 from '../assets/LOGO/images.png';

export default function BurgerMenu() {
  const [collapsed,setCollapsed]=useState(false)
  const [lightMode,setLightMode]=useState(false)
  return (
    <div className={`
    side-menu ${collapsed ? 'collapsed' :'expanded'}
    ${lightMode ? 'light':''}
    `}>
      <div className="side-menu-header">
         <img src={lightMode? LOGO2 : LOGO} alt="logo" />
         <button 
           className="toggle-menu-btn"
           onClick={()=>setCollapsed(!collapsed)}
           >
             <i class="bi bi-chevron-left"></i>
         </button>
      </div>
      <div className={`side-menu-container
          ${lightMode ? 'light':''}
      `}>
          <ul className="side-menu-items">
            <li>
              <p>analytics</p>
              <ul>
                <li>
                  <i class="bi bi-boombox"></i>
                  <a href="#">dashboard</a>
                  
                </li>
                <li>
                <i class="bi bi-graph-up"></i>
                 <a href="#">performance</a>
                  </li>
              </ul>  
            </li>
            <li>
              <p>content</p>
              <ul>
                <li>
                  <i class="bi bi-journal-text"></i>
                  <a href="#">gides</a>
                  </li>
                <li>
                  <i class="bi bi-arrow-repeat"></i>
                  <a href="#">hotspot</a>
                  </li>
                <li>
                  <i class="bi bi-file-earmark-check"></i>
                  <a href="#">checklists</a>
                  </li>
                <li>
                  <i class="bi bi-hand-thumbs-up"></i>
                  <a href="#">nps</a>
                  </li>
              </ul>
            </li>
            <li>
              <p>customization</p>
              <ul>
                <li>
                  <i class="bi bi-archive"></i>
                  <a href="#">segments</a>
                  </li>
                <li>
                <i class="bi bi-pencil-square"></i>
                 <a href="#">themes</a>
                  </li>
              </ul>
            </li>
          </ul>
      </div>
      <footer className="side-menu-footer">
        <div 
        className="mode"
        onClick={()=>setLightMode(!lightMode)}
        >
          <i class="bi bi-lightbulb"></i>
          <span>
            {lightMode ? "dark mode":"light mode"}
          </span>
        </div>
        <div className="avatar">
         <img src={AVATAR} alt="avatar" />
         <div className="avatar-info">
           <h5>Farzaneh vl</h5>
           <p>premium user</p>
         </div>
        </div>
      </footer>
    </div>
  )
}
