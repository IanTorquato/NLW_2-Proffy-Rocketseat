import React from 'react';

import iconWhatsapp from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  avatar: string
  bio: string
  cost: number
  id: number
  name: string
  subject: string
  whatsapp: string
}

interface TeacherItemProps {
  dataProffy: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ dataProffy }) => {
  function createNewConnection() {
    api.post('connections', { user_id: dataProffy.id })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={dataProffy.avatar} alt={dataProffy.name} />
        <div>
          <strong>{dataProffy.name}</strong>
          <span>{dataProffy.subject}</span>
        </div>
      </header>

      <p>{dataProffy.bio}</p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ {dataProffy.cost}</strong>
        </p>
        <a href={`https://wa.me/${dataProffy.whatsapp}`} target="_blank" rel="noopener noreferrer"
          onClick={createNewConnection}>
          <img src={iconWhatsapp} alt="Icon Whatsapp" /> Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;