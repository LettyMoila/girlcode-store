import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

const Category = () =>{
    let {catSlug} = useParams()
    let [catInfo, setCatInfo] = useState([])
    const [prodList, setProdList] = useState([])

    useEffect(()=> {
        fetch(`$(import.meta.env.VITE_API_URL)/category/${catSlug}`)
            .then(resp >= resp.json())
            .then(resp => {                                                                                                                                
                setCatInfo(resp)
            })
            .catch(error => {
                console.log(error)
            })

            fetch(`$(import.meta.env.VITE_API_URL)/category/${catSlug}/products`)
            .then(resp >= resp.json())
            .then(resp => {                                                                                                                                
                setProdList(resp.products)
                console.log(resp)
            })
            .catch(error => {
                console.log(SyntaxError)
            })
    }, [catSlug])

    return(
        
        <MainLayout>
            <section>
                <div className="mx-auto bg-page-header bg-no-repeat bg-cover py-20 px-16">
                    <div className="w-3/5">
                        <h1 className="text-6xl font-bold leading-tight text-girlcode-pink">{catInfo.desc}</h1>
                        <a href="#" className="bg-girlcode-pink text-white py-2 px-4 font-bold text-lg rounded-3xl mt-9 block w-fit">Buy now</a>
                    </div>
                    
                </div>

            </section>
            <section className="pt-20">
                <div className="mx-auto">
                    <div className="btn bg-gray-300">{catInfo.name} Type</div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="mt-9">
                        <h1 className="text-2xl font-extrabold">{catInfo.name} Deals For You!</h1>
                    </div>

                    <div className="grid gid-cols-3 gap-8">
                    {
                        prodList.map(prod =>(
                            <ProductItem key={prod.id} prod_info={prod}/>
                        ))
                    }
                
                    /</div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Category
