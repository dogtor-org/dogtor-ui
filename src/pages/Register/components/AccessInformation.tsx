import { Eye, EyeClosed } from 'phosphor-react';
import { useState, useRef, InputHTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

interface IAccessInformation {
  user: {},
  updateUser(arg0: object): void
}

export function AccessInformation({ user, updateUser }: IAccessInformation) {
  const [accessInfo, setAccessInfo] = useState({
    email: '',
    phone: '',
    password: ''
  })

  const navigate = useNavigate()

  const [isPasswordVisible, setIsPassworisPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
  const refPassowrd = useRef<HTMLInputElement>(null)
  const refConfirmPassorws = useRef<HTMLInputElement>(null)

  function changeFocus(ref: React.RefObject<HTMLInputElement>) {
    ref.current?.focus()
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAccessInfo({ ...accessInfo, [event.target.id]: event.target.value })
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()

    updateUser({...user, accessInfo})
  }

  return (
    <>
      <h1>Dados de acesso</h1>
      <span className="register-content__sub-title">Muito bom conhecer o dono desse pet.Agora, precisamos das suas informações de acesso</span>
      <form action="" className="register-content__form" onSubmit={(e) => onSubmit(e)}>
        <div className="register-content__form__form-container">
          <Input
            type="email"
            placeholder="E-mail"
            id='email'
            value={accessInfo.email}
            onChange={handleChange} />
          <Input
            type="phone"
            placeholder="Telefone"
            id='phone'
            value={accessInfo.phone}
            onChange={handleChange} />
          <Input
            placeholder='Senha'
            type={isPasswordVisible ? 'text' : 'password'}
            icon={
              isPasswordVisible
                ? <Eye weight='bold' color='#ACBBC3' width='1.5rem' height='1.5rem' onClick={() => setIsPassworisPasswordVisible(!isPasswordVisible)} />
                : <EyeClosed weight='bold' color='#ACBBC3' width='1.5rem' height='1.5rem' onClick={() => setIsPassworisPasswordVisible(!isPasswordVisible)} />
            }
            ref={refPassowrd}
            onClick={() => changeFocus(refPassowrd)}
          />
          <Input
            placeholder='Confirme Senha'
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            icon={
              isConfirmPasswordVisible
                ? <Eye weight='bold' color='#ACBBC3' width='1.5rem' height='1.5rem' onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} />
                : <EyeClosed weight='bold' color='#ACBBC3' width='1.5rem' height='1.5rem' onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} />
            }
            ref={refConfirmPassorws}
            onClick={() => changeFocus(refConfirmPassorws)}
            id='password'
            value={accessInfo.password}
            onChange={handleChange}
          />

          <div className="register-content__form__form-container__buttons-container register-content__form__form-container__buttons-container-inline">
            <Button isSecundary onClick={() => navigate(-1)}>Voltar</Button>
            <Button>Entrar</Button>
          </div>
        </div>
      </form>
    </>
  )
}