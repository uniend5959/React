import { useState } from "react"




const BoxItem = ({item ,handleDelteItem,id}) =>{
  const [isModal, setModal] = useState(false)

  const handleModal = () => {
    setModal((pre) => !pre)
  }


  return(
    <>
      <div className="border-solid	border-1 py-2 flex  justify-center	gap-20 my-5">
          <div className="">
            <p>{item.name} <span>{new Date(item.date).toString()}</span></p>
            <p>{item.content}</p>
          </div>
          <button onClick={handleModal}>수정하기</button>
          {isModal  && <div>모달오픈</div>}
          <button className="w-btnpx" onClick={() => handleDelteItem(id)}>삭제</button>
      </div>
      
    </>
  )
}

export default BoxItem