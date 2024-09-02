import { useEffect, useState } from "react";


const Coin = () => {
  const [isTrue, setTrue] = useState(true);
  const [coins, setCoions] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((res)=> res.json())
    .then(json => {
      setCoions(json)
      setTrue(false);
    })
  }, [])


  const hadleInput = (e) =>{
    setInput(e.target.value);
    console.log(typeof(input))

  }

  const FindItem = coins.filter((item) => item.id === input )

  return(
    // 새로알게 된 사실
    // 1. 삼항 연산자에 {}를 사용할려면 ``로 감싸기 
    // 2. ``를 사용하지안흔다면 () 안에 html 태그가 들어가고 그안에 {} 가 들어가야함 
    
    <>
    <h1>로딩 {isTrue ? '' : ` ${coins.length}`}</h1>
    <input type="text" 
      placeholder="금액을 입력해주세요" 
      style={{display : 'block'}}
      onChange={ (e) => {hadleInput(e)}}
    />
    {isTrue ? (<strong>로딩 ... .</strong>) : ( 
      <select>
        {input === '' ? (
          coins.map((item) => 
            <option>{item.name} : {item.quotes.USD.price}</option>
          )
        ) : (<option> {FindItem.name} </option>)}
      </select>
    ) }
    
    </>
  )
}

export default Coin;