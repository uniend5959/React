import { useState } from "react"
import PortalModal from "./portalModal"





const BoxItem = ({item ,handleDelteItem,id}) =>{
  const [ModalOpen , setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen((pre) => !pre)
  }

  return(
    <>
      <div className="border-solid	border-1 py-2 flex  justify-center	gap-20 my-5">
          <div className="">
            <p>{item.name} <span>{new Date(item.date).toString()}</span></p>
            <p>{item.content}</p>
          </div>
          <button onClick={() => handleModal()}>수정하기</button>
          <button className="w-btnpx" onClick={() => handleDelteItem(id)}>삭제</button>
      </div>

      {ModalOpen && <PortalModal/>}
      
    </>
  )
}

export default BoxItem