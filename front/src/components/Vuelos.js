import React from 'react'
import { gql, useQuery } from '@apollo/client'
import  {ItemVuelo}  from './ItemVuelo'

function Test(priceMin=0,priceMax=500,page=0,limit=10){
 return useQuery(gql`
 query getData {
   vuelos(priceMin:${priceMin},priceMax:${priceMax},page:${page},limit:${limit}){
     detail{
       _id,
       data,
       availability,
       destination,
       price
     },
     page
   }
 }
 `)
}
export const GetVuelos = (props) => {
  const { data, loading, error } = Test(props.priceMin, props.priceMax, props.page??0, props.limit??10);
  if(loading) return <p>Cargando... </p>
  if(error) return <h2>Error</h2>
  return(
    <div className="launches">
      {data.vuelos.detail.map((item) => (
        <ItemVuelo key={item._id} destination={item.destination} day={item.data} price={item.price} availability={item.availability}  />
      ))} 
    </div>
  )
}

