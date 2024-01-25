import React, { useState } from 'react'
import Home from './Home'
import Landing from './Landing'

export default function ExThree() {

    const [userName,setUserName] = useState("Robyn")
    const [currentPage,setCurrentPage] = useState("Landing")

    const userData = {
        store: [
          { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
          { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
          { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
        ],
        shouldDiscount: false,
      }

      const handleBtn = () => {
          setUserName("Mohammed")
        
      }

      const handlePage = () => {
        if(currentPage === "Landing"){
            setCurrentPage("Home")
        } else {
            setCurrentPage("Landing")
        }
      }


  return (
    <>
        {currentPage === "Landing" ? <Landing name={userName} store={userData.store}/> :
        <Home store={userData.store}/>}
        <button onClick={handleBtn}>Change name to Mohammed</button>
        <button onClick={handlePage}>Switch Pages</button>
    </>
  )
}
