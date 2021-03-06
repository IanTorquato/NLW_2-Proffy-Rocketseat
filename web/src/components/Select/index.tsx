import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string,
  name: string,
  options: Array<{
    label: string,
    value: string
  }>
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} value="" {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>

        {options.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
      </select>
    </div>
  )
}

export default Select
