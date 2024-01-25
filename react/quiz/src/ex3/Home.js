import React from 'react'
import Item from './Item'

export default function Home({store}) {
  return (
    <>
        {store.map((item,index)=><Item key={index} itemData={item}/>)}
    </>
  )
}
