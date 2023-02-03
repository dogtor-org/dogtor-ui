import dogLeft from '../../assets/imgs/dog-welcome-home.png'
import dogOwner from '../../assets/imgs/dog&owner-welcome-home.png'
import { Treatment } from '../../components/Treatment'
import { DogCard } from '../../components/DogCard'

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

        <section className='home__section-my-dogs'>
          <span className='home__section-my-dogs__text-container'>
            <h2>Seus  Cachorros</h2>
            <button className='home__section-my-dogs__text-container__add-dog'>Adiconar</button>
          </span>
          <div className="card-dogs">
            <DogCard />
          </div>
        </section>
      </main>
    </>
  )
}