import { Banner } from '../../components/Banner'
import { LoginForm } from './LoginForm'

export function Login() {
  return (
    <div className="login-main-container">
      <Banner />
      <section className='section-login'>
        <LoginForm />
      </section>
    </div>
  )
}