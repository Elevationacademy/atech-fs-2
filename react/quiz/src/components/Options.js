import React from 'react'
import Option from './Option'

export default function Options({options,HandleAnswer}) {
  return (
    <>
        {options.map((optionText,index)=><Option index={index} HandleAnswer={HandleAnswer} optionText={optionText} key={index}/>)}
    </>
  )
}
