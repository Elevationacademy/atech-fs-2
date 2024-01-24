import React from 'react'

export default function Option({index,optionText,HandleAnswer}) {

    const handleOption = () => {
        HandleAnswer(index)
    }

  return (
    <div onClick={handleOption}>o  {optionText}</div>
  )
}
