import React, { Component, useState } from 'react';

const Four = () => {
  const [name, setName] = useState(' ')

  const charan = () => {

    setName("Hi, I am Charan");
  }

  const ajay = () => {
    setName("Hi, I am Ajay");
  }

  const naresh = () => {
    setName("Hi, I am Naresh");
  }

  return (
    <div>
      <input type = "button" value ="Charan" onClick={charan} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type = "button" value ="Ajay" onClick={ajay} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type = "button" value ="Naresh" onClick={naresh} />
      <hr />
      Name is : <b>{name}</b>
    </div>
  )
}

export default Four;