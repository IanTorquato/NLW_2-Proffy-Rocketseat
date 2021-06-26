import React, { useState, FormEvent } from 'react'

import Header from '../../components/Header'
import TeacherItem, { Teacher as Proffy } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import iconSearch from '../../assets/images/icons/search.svg'

import './styles.css'
import api from '../../services/api'

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')
  const [proffys, setProffys] = useState([])

  async function searchProffys(event: FormEvent) {
    event.preventDefault()

    const { data } = await api.get('classes', { params: { subject, week_day, time } })

    setProffys(data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchProffys}>
          <Select label="Matéria" name="subject" value={subject} onChange={e => setSubject(e.target.value)} options={[
            { value: 'Programação', label: 'Programação' },
            { value: 'Design', label: 'Design' },
            { value: 'Redes', label: 'Redes' },
            { value: 'Hardware', label: 'Hardware' },
            { value: 'Física Quântica', label: 'Física Quântica' }
          ]} />

          <Select label="Dia da semana" name="week_day" value={week_day} onChange={e => setWeek_day(e.target.value)} options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' }
          ]} />

          <Input label="Hora" name="time" type="time" value={time} onChange={e => setTime(e.target.value)} />

          <button type="submit">
            Buscar
            <img src={iconSearch} alt="Buscar Professores" />
          </button>
        </form>
      </Header>

      <main>
        {proffys.map((proffy: Proffy) => <TeacherItem dataProffy={proffy} key={proffy.id} />)}
      </main>
    </div>
  )
}

export default TeacherList
