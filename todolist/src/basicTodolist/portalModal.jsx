import ReactDOM from 'react-dom'

const BackDrop = () => {
  return(
    <>
    <div className="backdrop-blur-md"></div>
    </>
  )
}


const OverrayCard = () => {
  return(
    <>
      <div>
        <textarea name="" id=""></textarea>
        <button>수정하기</button>
      </div>
    </>
  )
}



const PortalModal = () => {
  return(
    <>
    {ReactDOM.createPortal(
      <BackDrop/>,
      document.getElementById('backdrop-root')
    )}
    {
      ReactDOM.createPortal(
        <OverrayCard/>,
        document.getElementById('ovray-root')
      )
    }
    </>
  )

}

export  default PortalModal