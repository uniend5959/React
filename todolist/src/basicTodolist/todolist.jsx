import BoxItem from "./todoitem"


const ListMsp = ({data}) =>{

  // 맵을 사용하여 돌려주기 
  return(
    <>
      <div>
        {data.map((item)=> 
            <BoxItem item={item} />
        )}
      </div>
    </>
  )
}

export default ListMsp