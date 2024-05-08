import React, { useState } from 'react';
import Header from '../Header/Header';
import { addPost, postSliceThunk } from '../../Store/Reducers/getSlice';
import { useDispatch } from 'react-redux';
import style from './Register.module.css';

const Register = () => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const dispatch = useDispatch();

  const Submit = () => {
    if (name.trim() != '', surname.trim() != '') {
      dispatch(postSliceThunk({ name, surname }));
      dispatch(addPost({ name, surname }));
    }
    else {
      alert("INP Doldur!!!")
    }
    setName('');
    setSurname('');
  };

  return (
    <div>
      <Header />
      <div className={style.inp}>
        <div className={style.ctn}>
          <div className={style.name}>
            <h1>Name <span>*</span></h1>
            <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={style.surname}>
            <h1>SURNAME <span>*</span></h1>
            <input type="text" name="" id="" value={surname} onChange={(e) => setSurname(e.target.value)} />
          </div>
          <div className={style.btn}>
            <button onClick={Submit}>POST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
