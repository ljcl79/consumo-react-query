import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import Product from '../Product/Product';



const Gallery = () => {
    
    const { isLoading, data, isError, error } = useQuery(
            {
                queryKey: ['productos'],
                queryFn: async () => {
                    const res = await fetch('https://apiexpress-x7sl.onrender.com/productos');
                    return res.json();
                }
            });
    
    if (isLoading)
        return (
            <>
                <h2>Cargando productos...</h2>
            </>
        )

    if (isError) {
        return (
            <>
                <h2>{error.message}</h2>
            </>
        )
    }
  return (
    <>
        <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Our Services</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
            
            {
                data?.map((producto) => {
                    return <Product key={producto._id} product={producto}></Product>
                })
            }
            </div>
         </div>
        </div>
    </>
  )
}

export default Gallery