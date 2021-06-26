import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Textarea from '../../components/TextArea'
import Select from '../../components/Select'
import api from '../../services/api'
import iconWarning from '../../assets/images/icons/warning.svg'

import './styles.css'

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '08:00', to: '18:00' }])

  const history = useHistory()

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '08:00', to: '18:00' }])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const newScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })

    setScheduleItems(newScheduleItems)
  }

  async function createClass(event: FormEvent) {
    event.preventDefault()

    try {
      await api.post('classes', { name, avatar, whatsapp, bio, subject, cost: Number(cost), schedule: scheduleItems })
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    } catch (error) {
      alert('[ERRO] Falha ao cadastrar!')
      console.log(error)
    }
  }

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição" />

      <main>
        <form onSubmit={createClass} >
          <fieldset>
            <legend>Seus dados</legend>

            <Input label="Nome completo" name="name" value={name} onChange={e => setName(e.target.value)} />
            <Input label="Avatar" name="avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
            <Input label="Whatsapp" name="whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
            <Textarea label="Biografia" name="bio" value={bio} onChange={e => setBio(e.target.value)} />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select label="Matéria" name="subject" value={subject} onChange={e => setSubject(e.target.value)} options={[
              { value: 'Programação', label: 'Programação' },
              { value: 'Design', label: 'Design' },
              { value: 'Redes', label: 'Redes' },
              { value: 'Hardware', label: 'Hardware' },
              { value: 'Física Quântica', label: 'Física Quântica' }
            ]} />

            <Input label="Custo da sua hora por aula" name="cost" value={cost} onChange={e => setCost(e.target.value)} />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
            </legend>

            {scheduleItems.map((scheduleItem, position) => (
              <div className="schedule-item" key={scheduleItem.week_day}>
                <Select label="Dia da semana" name="week_day" value={scheduleItem.week_day}
                  onChange={e => setScheduleItemValue(position, 'week_day', e.target.value)} options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' }
                  ]} />

                <Input label="Das" name="from" type="time" value={scheduleItem.from}
                  onChange={e => setScheduleItemValue(position, 'from', e.target.value)} />

                <Input label="Até" name="to" type="time" value={scheduleItem.to}
                  onChange={e => setScheduleItemValue(position, 'to', e.target.value)} />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={iconWarning} alt="Aviso Importante" />
              Importante! <br /> Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
