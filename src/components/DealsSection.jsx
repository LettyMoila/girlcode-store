import { useEffect, useState } from 'react';
import ProductItem from './ProductItem'

const DealsSection = ({prod_info}) =>{
    const [prodList, setProdList] = useState([])

    useEffect(()=> {
        fetch(`$(import.meta.env.VITE_API_URL)/products`)
            .then(resp >= resp.json())
            .then(resp => {                                                                                                                                
                setProdList(resp.products)
                console.log(resp)
            })
            .catch(error => {
                console.log(SyntaxError)
            })
    }, [])

    return(
        <section className="pt-26">
            <div className="container mx-auto">
                <div className="mt-9">
                <h1 className="text-2xl font-extrabold">Todays Best Deals For You!</h1>
                </div>

                <div className="grid gid-cols-3 gap-8">
                    {
                        prodList.map(prod =>(
                            <ProductItem key={prod.id} prod_info={prod}/>
                        ))
                    }
                
                </div>
                
            </div>
        </section>
    )
}

export default DealsSection; 
