

const Btn = ({fontSize= '16px' , color= 'balck' , backgroundColor, onClick, value}) => {
  console.log(value, '렌더링발생 ')
  return(
    <>
      <button 
        onClick = {onClick}
      style={
        {
        
          fontSize : fontSize,
          color : color,
          backgroundColor: backgroundColor,
          width : '100px',
          height: '50px'
        }
      }>{value}</button>
    </>
  )
}

export default Btn;