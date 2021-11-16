import React from 'react'
import Cards from '../components/Cards/index'
import First from '../components/FirstComponent/index'
import Partners from '../components/Partners/index'
import Products from '../components/Products/index'
import ProductTwo from '../components/ProductTwo/index'
import Video from '../components/Video/index'
import Reviews from '../components/Reviews'
import LastContainer from '../components/LastContainer/index'
import {fetchQuery} from '../utils';

export default function home({data, products, turnkeys}) {  
  console.log(data, 'daara')
  return (  
    <div>
       <First banner={data.Banners}/>         
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

export async function getServerSideProps() {
  const homeData = await fetchQuery('home-page');
  const products = await fetchQuery('products')
  const turnkeys = await fetchQuery('turnkeys')
  return {
      props: {
      products,
      turnkeys,
      data:homeData
      }
  }
}