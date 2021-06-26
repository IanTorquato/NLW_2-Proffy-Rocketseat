import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import imgLogoProffy from '../../assets/images/logo.svg'
import imgLanding from '../../assets/images/landing.svg'
import iconStudy from '../../assets/images/icons/study.svg'
import iconGiveClasses from '../../assets/images/icons/give-classes.svg'
import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'

import './styles.css'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    async function searchTotalConnections() {
      const { data } = await api.get('connections')
      setTotalConnections(data.total)
    }

    searchTotalConnections()
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={imgLogoProffy} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={imgLanding} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={iconStudy} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={iconGiveClasses} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={iconPurpleHeart} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing
