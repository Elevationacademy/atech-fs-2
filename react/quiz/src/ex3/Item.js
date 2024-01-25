import React from 'react'

export default function Item({itemData}) {
  return (
    <div>
        {itemData.item} : {itemData.price}
    </div>
  )
}
