import React from 'react'
import Item from './Item'

export default function Landing({name,store}) {


  return (

    <>
        <div>Welcome, {name}</div>
        <Item itemData={store.find((item)=>item.hottest)}/>

    </>
  )
}
