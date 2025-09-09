import React, {Component} from 'react';
import Menu from '../menu/menu';

const ButtonEx = () => {

  const charan = () => {
    alert("Hello Charan");
  }

  const nafees = () => {
    alert("Hello Nafees");
  }

  const sampath = () => {
    alert("Hello Sampath");
  }

  return(
    <div>
      <Menu />
      <input type="button" value="charan" onClick={charan} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="nafees" onClick={nafees} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="sampath" onClick={sampath} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default ButtonEx;
