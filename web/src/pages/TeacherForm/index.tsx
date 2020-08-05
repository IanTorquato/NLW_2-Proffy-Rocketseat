import React from 'react'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Textarea from '../../components/TextArea'
import Select from '../../components/Select'
import iconWarning from '../../assets/images/icons/warning.svg'

import './styles.css'

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição" />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="Whatsapp" name="whatsapp" />
          <Textarea label="Biografia" name="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select label="Matéria" name="subject" options={[
            { value: 'Programação', label: 'Programação' },
            { value: 'Design', label: 'Design' },
            { value: 'Redes', label: 'Redes' },
            { value: 'Hardware', label: 'Hardware' },
            { value: 'Física Quântica', label: 'Física Quântica' }
          ]} />

          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <footer>
          <p>
            <img src={iconWarning} alt="Aviso Importante" />
            Importante! <br /> Preencha todos os dados
            </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm