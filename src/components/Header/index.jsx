import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

export default function Header() {
   return (
       <header className="Header">
           <div className="welcome" ><span>Bem-vindo, administrador.</span></div>
           <Link to="/" className="logo">
               <span className="first">vestido</span>
               <span className="second">bank</span>
            </Link>
       </header>
   );
}