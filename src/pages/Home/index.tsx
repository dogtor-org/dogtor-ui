import dogLeft from '../../assets/imgs/dog-welcome-home.png'
import dogOwner from '../../assets/imgs/dog&owner-welcome-home.png'
import { Treatment } from '../../components/Treatment'
export function Home() {
  return (
    <>
      <main className="home">
        <div className="home__welcome-text">
          <h1>Ola calixto</h1>
          <span>Bom Dia!</span>
        </div>
        <section className="home__banner-section">
          <div className="home__banner-section__content">
            <img src={dogLeft} alt="" />
            <span className='home__banner-section__content__text'>A alegria deles também é a nossa</span>
            <img src={dogOwner} alt="" />
          </div>
        </section>

        <section className='home__section-treatment'>
          <h2>Atendimentos</h2>
          <div className="home__section-treatment__card-treatment">
            <Treatment />
            <Treatment />
            <Treatment />
            <Treatment />
          </div>
        </section>
      </main>
    </>
  )
}