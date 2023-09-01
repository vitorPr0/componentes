import React from 'react';
import Style from './header.module.css';

function Header(props) {
  return (
    <header className={Style.header} style={{backgroundColor: props.cor}}>
        <div className={Style.logo}>
            <img src={props.src} alt="logo" />
        </div>
        <div className={Style.central}>
         <div className={Style.busca}>
            <input type="text" placeholder='Para seu pet ou sua casa, procure aqui' />
            <button>Pesquisar</button>
         </div>
         <div className={Style.menu}>
            <nav>
                <ul>
                    <li><a href="#">Teste</a></li>
                </ul>
            </nav>
         </div>
        </div>
    </header>
  )
}

export default Header;