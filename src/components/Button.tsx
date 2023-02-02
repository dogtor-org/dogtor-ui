interface IButton {
  children: string;
  isSecundary?: boolean;
  onClick?(): void 
}

export function Button({children, isSecundary, onClick}:IButton){
  return(
    <button className={`button ${isSecundary ? 'secundary' : null}`} onClick={onClick}>
      {children}
    </button>
  )
}