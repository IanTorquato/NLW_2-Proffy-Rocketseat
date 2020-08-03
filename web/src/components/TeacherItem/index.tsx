import React from 'react';

import iconWhatsapp from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/61882248?s=460&u=fbacf3b2ab7fbe9e721081f8774169d9f243fffc&v=4" alt="Ian Torquato" />
        <div>
          <strong>Ian Torquato</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Estou interessado em trabalhar com JavaScript em qualquer parte da aplicação. Já tenho uma base de conhecimento com React, React Native e Node.
      <br /> <br />
      Busco um local de trabalho onde eu possa ganhar experiência e crescer como programador dentro da empresa, contribuindo para o crescimento da mesma.
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={iconWhatsapp} alt="Icon Whatsapp" />
        Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;