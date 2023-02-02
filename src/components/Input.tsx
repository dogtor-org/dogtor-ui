import React from 'react' 

interface IInput {
  type: string,
  icon?: React.ReactNode
  placeholder: string,
  onClick?(): void,
  value?: string,
  onChange?(event: React.FormEvent<HTMLInputElement>): void,
  id?: string
}

export const Input = React.forwardRef<HTMLInputElement, IInput>(({ type, icon, placeholder, onClick, value, onChange, id }, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div className='input-container'>
      <input
        id={id}
        value={value}
        onChange={onChange}
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



