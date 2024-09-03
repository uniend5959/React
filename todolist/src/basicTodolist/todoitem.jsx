



const BoxItem = ({item}) =>{


  return(
    <>
      <div className="border-solid	border-1 py-2 flex  justify-center	gap-20 my-5">
          <div className="">
            <p>{item.name} <span>{new Date(item.date).toString()}</span></p>
            <p>{item.content}</p>
          </div>
          <button className="w-btnpx">삭제</button>
      </div>
      
    </>
  )
}

export default BoxItem