import { CalendarBlank } from "phosphor-react";
import dogImage from '../assets/imgs/dog-card.png'

export function DogCard(){
  return(
    <div className="dog-card">
      <span className="dog-card__info-top">
        <span className="dog-card__info-top__text-info">
          <h4>Thor</h4>
          <span>Bulldog Frances</span>
        </span>
        <span className="dog-card__info-top__calendar-icon">
          <CalendarBlank size={'1rem'} color="#ffffff" weight="bold" />
        </span>
      </span>
      <span className="dog-card__year-icon-container">
        <span className="dog-card__year-icon-container__year">
          3anos
        </span>
      </span>
      <div className="dog-card__image-dog">
        <img src={dogImage} alt="" />
      </div>
    </div>
  )
}