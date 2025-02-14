import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemoEdit = ({onCreate}) => {

  const [state, setState] = useState({
    title: "",
    content:"",
    member: "",
  });

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    // console.log(state)
    alert("저장 성공")
    onCreate(state.title, state.content, state.member)
    setState({
      title:"",
      content:"",
      member:"",
    })
  }
  const navigate = useNavigate()
  const goHome = () => {
    navigate(-1)
  }

  return (
    <div className="MemoEdit">
      <button onClick={goHome}>뒤로가기</button>
    <h2>오늘의 강의 메모</h2>
    <div>
      <input 
        placeholder='제목'
        name='title'
        value={state.title}
        onChange={handleState}
      />
    </div>
    <div>
      <textarea 
        placeholder='내용작성'
        name='content'
        value={state.content}
        onChange={handleState}
        />
    </div>
    <div>
      <span>운영진 : </span>
      <select name='member' value={state.member} onChange={handleState}>
        <option value='default'>운영진을 선택해주세요</option>
        <option value={'안재현'}>안재현</option>
        <option value={'이태헌'}>이태헌</option>
        <option value={'오세찬'}>오세찬</option>
        <option value={'모유진'}>모유진</option>
        <option value={'박규현'}>박규현</option>
      </select>
    </div>
    <div>
      <button onClick={handleSubmit}>저장하기</button>
import React from 'react';

const MemoEdit = () => {

  return (
    <div className="MemoEdit">
    <h2>오늘의 강의 메모</h2>
    <div>
      <input placeholder='제목'/>
    </div>
    <div>
      <textarea placeholder='내용작성'/>
    </div>
    <div>
      <span>운영진 : </span>
      <select>
        <option value={1}>안재현</option>
        <option value={2}>이태헌</option>
        <option value={3}>오세찬</option>
        <option value={4}>모유진</option>
        <option value={5}>박규현</option>
      </select>
    </div>
    <div>
      <button>저장하기</button>
    </div>
  </div>
  );
};

export default MemoEdit;