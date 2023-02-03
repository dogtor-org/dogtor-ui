import { Shower } from 'phosphor-react'

export function Treatment(){
  return(
    <button className='treatment-container'>
      <div className='treatment-container__icon-treatment'>
        <Shower size={32} color="#ffffff" weight="bold" />
      </div>
      <span>Banho</span>
    </button>
  )
}