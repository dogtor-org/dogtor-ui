import logoImage from '../../../assets/imgs/small_logo.svg'

export function Header(){
  return(
    <div className="register-container__logo-container">
      <img src={logoImage} alt="" />
    </div>
  )
}