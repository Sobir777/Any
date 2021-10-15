import React from 'react'
import Cards from '../components/Cards/index'
import First from '../components/FirstComponent/index'
import Partners from '../components/Partners/index'
import Products from '../components/Products/index'
import ProductTwo from '../components/ProductTwo/index'
import Video from '../components/Video/index'
import Reviews from '../components/Reviews'
import LastContainer from '../components/LastContainer/index'

export default function Home() {
  return (
    <div>
      <First/>
      <Cards/>
      <Products/>
      <Partners/>
      <Video/>
      <ProductTwo/>
      <Reviews/>
      <LastContainer/>




    </div>
  )
}
