import { useRef, useState } from 'react'
import { EyeClosed, Eye } from 'phosphor-react'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

import logoImage from '../../../assets/imgs/logo.svg'

export function LoginForm() {
  const [passVisible, setPassVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function changeFocus() {
    inputRef.current?.focus()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="section-login__login-container">
      <div className="section-login__login-container__image-logo">
        <img src={logoImage} alt="Logo" className='' />
      </div>
      <form className="section-login__login-container__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="section-login__login-container__form__inputs-container">
          <Input placeholder='E-mail' type='email' />
          <Input
            placeholder='Senha'
            type={passVisible ? 'text' : 'password'}
            icon={
              passVisible
                ? <Eye weight='bold' color='#ACBBC3' width='1.5rem' height='1.5rem' onClick={() => setPassVisible(!passVisible)} />
                : <EyeClosed weight='bold' color='#ACBBC3' width='1.5rem' height='1.5rem' onClick={() => setPassVisible(!passVisible)} />
            }
            ref={inputRef}
            onClick={changeFocus} />
          <span className='section-login__login-container__form__inputs-container__forgot-password'>Esqueci minha Senha</span>
        </div>
        <Button>Entrar</Button>
      </form>
      <span className='section-login__login-container__register-link'>Não possui uma conta? <a href="/"><strong> Registrar-se </strong></a></span>
    </div>
  )
}