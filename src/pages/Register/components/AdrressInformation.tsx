import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

interface IAdrressInformation{
  user: {},
  updateUser(arg0: object): void
}

export function AdrressInformation ({user, updateUser}: IAdrressInformation){
  const [adrressInfo, setAdrressInfo] = useState({
    cep: '',
    street: '',
    streetNumber: '',
    complement: '',
    city: '',
    state: '',
  })
  const navigate = useNavigate()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setAdrressInfo({...adrressInfo, [event.target.id]: event.target.value})
  }

  function onSubmit(event: React.FormEvent){
    event.preventDefault()

    updateUser({...user, adrressInfo})
    navigate('../abadum')
  }

  return(
    <>
      <h1>Seu endereço</h1>
      <span className="register-content__sub-title">Para podemos encontrar estabelecimentos próximos de você</span>
      <form action="" className="register-content__form" onSubmit={onSubmit}>
        <div className="register-content__form__form-container">
          <Input 
            type="text"
            placeholder="CEP"
            id="cep"
            value={adrressInfo.cep}
            onChange={handleChange}/>
          <div className="register-content__form__form-container__street-info">
            <Input
            type="text"
            placeholder="Rua"
            id="street"
            value={adrressInfo.street}
            onChange={handleChange}/>
            <Input
            type="text"
            placeholder="N.º"
            id="streetNumber"
            value={adrressInfo.streetNumber}
            onChange={handleChange}/>
          </div>
          <Input
          type="text"
          placeholder="Complemento"
          id="complement"
          value={adrressInfo.complement}
          onChange={handleChange}/>
          <Input
          type="text"
          placeholder="Cidade"
          id="city"
          value={adrressInfo.city}
          onChange={handleChange}/>
          <Input
          type="text"
          placeholder="Estado"
          id="state"
          value={adrressInfo.state}
          onChange={handleChange}/>
          <div className="register-content__form__form-container__buttons-container register-content__form__form-container__buttons-container-inline">
            <Button isSecundary onClick={() => navigate('../')}>Voltar</Button>
            <Button>Continuar</Button>
          </div>
        </div>
      </form>
    </>
  )
}