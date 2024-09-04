
import { useState } from "react"
import SelectFilter from "./selectFilter"
import BoxItem from "./todoitem"


const ListMsp = ({data, handleDelteItem}) =>{

  const [category, setCaategory] = useState('')

  // 맵을 사용하여 돌려주기 
  const filterData = category ==='' ? data :  data.filter((itme)=> itme.name === category)
  // 필터링에 사용할 조건 상태 
  
  

  return(
    <>
      <SelectFilter data={data} setCaategory={setCaategory}/>
      <div>
        {filterData.map((item)=> 
            <BoxItem  key={item.id} id={item.id} item={item} handleDelteItem={handleDelteItem} />
        )}
      </div>
    </>
  )
}

export default ListMsp