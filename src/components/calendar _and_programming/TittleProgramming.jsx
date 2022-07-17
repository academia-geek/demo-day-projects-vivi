import React from 'react'

export const TittleProgramming = ({k}) => {
 const date= new Date(k*1000)
console.log(date);
let day = date.getDate();
let month = date.getMonth() + 1;
let fullYear = date.getFullYear();
let fecha = `${day}/${month}/${fullYear}`;
  return (
    <div>
     {fecha}
    </div>
  )
}
