import { useQuery } from '@tanstack/react-query';
import React from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
const SingleItem = () => {
    const {itemID} = useParams();

    const {isLoading, error, data} = useQuery({
      queryKey: ["single product"],
      queryFn: async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${itemID}`);
        const data = await response.json();
        console.log(data)
        return data
      }
    })

    if(isLoading) {
      return <Loader />
    }
    if(error){
      return <Error/>
    }
  
  return (
    <div>
        <img src={data.image}/>
        hello this is the id you have chosen: {itemID}
    </div>
  )
}

export default SingleItem