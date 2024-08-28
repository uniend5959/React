import React, { useState } from "react";

const State = ()=>{

  const [filter, setFilter] = useState("xx");

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  const Time = () => {
    // false면 열린다 --> 먼저입력하는 쪽이 게산전 값, 나중에 보이깞이 업데이트되는값
    //데이터저장
    const [data, setData] = useState(0);
    const [isChange, setIschange] = useState(false);

    const handleInput = (e) => {
      setData(e.target.value);
    };

    const reset = () => {
      setData(0);
    };

    const fliped = () => {
      reset();
      setIschange(!isChange);
    };

    return (
      <div>
        <div>
          <label htmlFor="hour"></label>
          <input
            value={isChange ? data : Math.round(Math.round(data / 60))}
            type="number"
            placeholder="시간"
            id="hour"
            onChange={(e) => {
              handleInput(e);
            }}
            disabled={!isChange} //true 일때 막힘
          />
        </div>
        <div>
          <label htmlFor="minute"></label>
          <input
            value={isChange ? data * 60 : data}
            type="number"
            placeholder="분"
            id="minute"
            onChange={(e) => {
              handleInput(e);
            }}
            disabled={isChange}
          />
        </div>
        <button
          onClick={() => {
            reset();
          }}
        >
          리셋
        </button>
        <button
          onClick={() => {
            fliped();
          }}
        >
          전환
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>계산기</h1>
      <select value={filter} onChange={handleFilter}>
        <option value="xx">xx</option>
        <option value="0">시계</option>
        <option value="1">거리</option>
      </select>
      <hr />
      {filter === "xx" ? "다시 카테고리를 선택하세요" : null}
      {filter === "0" ? <Time /> : null}
      {filter === "1" ? "거리계산기" : null}
    </div>
  );
}

export default State;