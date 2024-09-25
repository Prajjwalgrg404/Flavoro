import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import Fooditems from '../Components/Fooditems'
import Cart from '../Components/Cart'


function Home() {
  return (
    <div>
      <Navbar />
      <CategoryMenu/>
      <Fooditems/>
      <Cart/>
    </div>
  )
}

export default Home