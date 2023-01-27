interface IButton {
  children: string
}

export function Button({children}:IButton){
  return(
    <button className='button'>
      {children}
    </button>
  )
}