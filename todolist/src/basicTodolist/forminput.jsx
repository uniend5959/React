


// 1. input의 값을 받아, 하나의 상태로 관리한다. 


import { useState } from "react"

const FormInput = ({handletoparent}) =>{
  // 업데이트가 된 상태를 부모로 전달하고 전달받은  부모가 다른 자식에게 전달해서 뿌려야할떄는 ? 부모가 자식의 상태를 매개변수로 받는다. 

  const [object, setObject ] = useState({
    name: '',
    content: '',
    date : null
  })

// input을 다루는 핸들러로 자식의 상태 업뎃을 담당한다. 
const handleInput = (e) => {
  e.preventDefault();
  const {name, value} = e.target;
  //객체의 경우 속성 중 일부의 값만 변경될 수있기 때문에, 직전 상태의 값을 가져와 사용해야하며, 리렌더를 시키기위해 객체를 복사해 새로운 주소를 알려줘야한다. 
  setObject((pre) => { return {
    ...pre,
    [name] : value
    // 아래 와 할경우, 덮어씌우기가 주인을 제대로 찾아가지 못하고 제대로 되지 못한다. 이를 대비해 input의 name속성을 넣어주고, target에 속성을 이름과 벨류로 분리해야한다. 
    // name : e.target.value,
    // content : e.target.value,
    // date : e.target.value,
  }})
}


  const handleSubmit = (e) => {
    e.preventDefault();
    // 제출되면 초기화하기 
    handletoparent(object)
    setObject({
      name: '',
      content: '',
      date : new Date()
    })
  }

  return(
    <>
      {/* 서브밋이 발생시 작동하는 핸든러 장착, 버튼은 서브밋 설정  */}
      <form className="inline-block mb-20" 
        onSubmit={(e) => handleSubmit(e) }
      >
        <input className="block py-2  my-3" type="text" placeholder="이름"  name="name"
        onChange={(e)=>handleInput(e)}
        value={object.name}
        />
        <input className="block py-2 my-3" type="text" placeholder="내용"  name="content"
        onChange={(e)=>handleInput(e)}
        value={object.content}
        />
        <input className="block py-2 my-3 w-btnpx" type="date" placeholder="날짜" name="date"
        onChange={(e)=>handleInput(e)}
        value={object.date}
        />
        <button className="w-btnpx leading-btnHeiht" 
          type="submit"
        >등록하기</button>
      </form>
    </>
  )
}

export default FormInput