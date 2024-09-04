import { useState } from "react"
import FormInput from "./forminput"
import ListMsp from "./todolist"



const Todolist = () =>{

  // 자식의 상태를 받을 상태 필요, 
  // 부모의 데이터는 배열로 이뤄져야 함 
  const [data, setData] = useState([
    {
      id: Math.random().toString(),
      name: '감자',
      content: '고구마가 되기싫어',
      date : new Date(2024, 8, 4)
    }
  ])


  // 자식의 상태 받아 부모의 상태로 전환하기 
  const handletoparent = (object) =>{
    console.log('부모', object)
    // 추가하기 
    setData([
      {
        id: Math.random().toString(),
        name: object.name,
        content: object.content,
        date : new Date(object.date)
      },
      ...data
    ])
  }

  const handleDelteItem = (id) => {
    console.log(id)
    const deltedata = data.filter((itme) => itme.id !== id)
    setData(deltedata);
  }



  return(
    <>
      <div className="pt-20 text-center">
        <h1 className="text-5xl">Todolist</h1>
        <FormInput  handletoparent={handletoparent}/>
        <hr />
        {/* 자식에게 데이터 보내기 */}
        <ListMsp data={data} handleDelteItem={handleDelteItem}/>
      </div>
    </>
  )
}

export default Todolist