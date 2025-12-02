import React from 'react'

const Input = (props) => {
  return (
    <div className="form-floating">
        <input onChange={props.onChange} value={props.value} required={props.isRequired} type={props.type} name={props.name} className="form-control" id={props.name} placeholder={props.placeholder} />
        <label htmlFor={props.name} >{props.label}</label>
    </div>
  )
}

export default Input
