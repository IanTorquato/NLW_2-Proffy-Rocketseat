import React from 'react'

import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'

import './styles.css'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input label="Matérias" name="subject" />

          <Input label="Dia da semana" name="week_day" />

          <Input label="Hora" name="time" type="time" />
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList