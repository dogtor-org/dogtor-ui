import React from 'react' 

interface IInput {
  type: string,
  icon?: React.ReactNode
  placeholder: string,
  onClick?(): void,
}

export const Input = React.forwardRef<HTMLInputElement, IInput>(({ type, icon, placeholder, onClick }, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div className='input-container'>
      <input
        type={type}
        placeholder={placeholder}
        ref={ref} />
      {
        icon
          ? <button onClick={onClick} className='input-container__icon-container'>{icon}</button>
          : null
      }
    </div>
  )
})



