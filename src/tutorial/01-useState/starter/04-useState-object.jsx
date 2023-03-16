import { useState } from 'react';

const UseStateObject = () => {



  const [person, setPerson]= useState({
    name:'Taylor',
    age:22,
    hobby:'full stack developwe'
  })


const displayPerson = () => {
// setPerson({
//   name:'Trish',
//   age:22,
//   hobby: 'backend developer'
// });
// setPerson({name: 'Ava'})
setPerson({...person, name: "Ava"});
};

  return <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4>
      <button onClick={(displayPerson)} className='btn'>
        show person 
      </button>
     </>
  
  
};

export default UseStateObject;
