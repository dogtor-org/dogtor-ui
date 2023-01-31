import imageBanner from '../assets/imgs/dog-owner-banner.png'

export function Banner() {
  return (
    <section className='section-banner'>
      <div className="section-banner__image-banner">
        <img src={imageBanner} alt="" />
      </div>
    </section>
  )
}