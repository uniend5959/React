import BoxItem from "./todoitem"


const ListMsp = ({data, handleDelteItem}) =>{

  // 맵을 사용하여 돌려주기 
  return(
    <>
      <div>
        {data.map((item)=> 
            <BoxItem  key={item.id} id={item.id} item={item} handleDelteItem={handleDelteItem} />
        )}
      </div>
    </>
  )
}

export default ListMsp