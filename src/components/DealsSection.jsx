import ProductItem from './ProductItem'

const DealsSection = () =>{
    return(
        <section className="pt-26">
            <div className="container mx-auto">
                <div className="mt-9">
                <h1 className="text-2xl font-extrabold">Todays Best Deals For You!</h1>
                </div>

                <div className="grid gid-cols-3 gap-4">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
                
            </div>
        </section>
    )
}

export default DealsSection 
