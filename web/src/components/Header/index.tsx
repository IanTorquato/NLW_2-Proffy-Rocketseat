import React from 'react'
import { Link } from 'react-router-dom'

import imgLogoProffy from '../../assets/images/logo.svg'
import iconBack from '../../assets/images/icons/back.svg'
import './styles.css'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="component-header">
      <div className="top-bar-container">
        <Link to="/"><img src={iconBack} alt="Voltar" /></Link>
        <img src={imgLogoProffy} alt="Logo Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  )
}

export default Header