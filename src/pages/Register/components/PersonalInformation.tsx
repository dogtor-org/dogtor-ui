import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

interface IPersonalInformation {
  user: {},
  updateUser(arg0: object): void
}

export function PersonalInformation({ user, updateUser }: IPersonalInformation) {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    date: '',
    cpf: ''
  })

  const navigate = useNavigate()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPersonalInfo((prevPersonalInfo) => ({ ...prevPersonalInfo, [event.target.id]: event.target.value }))
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()

    updateUser({...user, personalInfo})
    navigate('./aba')
  }

  return (
    <>
      <h1>Informações pessoais</h1>
      <span className="register-content__sub-title">Primeiro de tudo, vamos nos conhecer. Nos diga, quem é você?</span>
      <form action="" className="register-content__form" onSubmit={onSubmit}>
        <div className="register-content__form__form-container">
          <Input
            type="text"
            placeholder="Nome Completo"
            id="name"
            value={personalInfo.name}
            onChange={handleChange} />
          <Input
            type="text"
            placeholder="Data de Nascimento"
            id="date"
            value={personalInfo.date}
            onChange={handleChange} />
          <Input 
            type="text" 
            placeholder="CPF"
            id="cpf"
            value={personalInfo.cpf} 
            onChange={handleChange}/>

          <div className="register-content__form__form-container__buttons-container">
            <Button>Continuar</Button>
            <Button isSecundary onClick={() => navigate('/login')}>Já possuo uma Conta</Button>
          </div>
        </div>
      </form>
    </>
  )
}