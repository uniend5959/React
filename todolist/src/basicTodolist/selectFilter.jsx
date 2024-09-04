// 컴포넌트 디자인 하기 
// 1. 드롭다운을 누른다  이벤트 
// 2. 리스트가 열린다.  상태
// 3. 옵션을 클릭한다,.  이벤트 
// 4. 리스트가 닫힌다.  상태 
// 5. 클릭된 리스트가 표시된다.  상태 

import { useState } from "react";

// 리스트가 열리고 닫히는 상티 false 닫힌 , ture 열림 
// 옵션이 선택된다. 선택되지 않는 상태 
// 이벤트 두개 






const SelectFilter = ({data, setCaategory}) => {


  const [isOpen, setOpen ] = useState(false);
  const [selected, setSelected] = useState(null)

  const handleIsOpen = () =>{
    setOpen((prv) => !prv)
  }

  const optionCheked = (name) => {
    setSelected(name)
    console.log(selected)
    setOpen(false);
    setCaategory(name)
  }
  const optionList = data.map((item,index) => (
    <li key={index} onClick={() => {optionCheked(item.name)}}>{item.name}</li>
  ))


  return(
    <>
      <div onClick={handleIsOpen}> {!selected  ? '선택하기' : selected }</div>
      {isOpen && optionList}
    </>
  )
}

export default SelectFilter;