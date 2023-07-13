import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

const Cart = () => {
    const [currCart, setCurrCart] = useState([])
    const [currTotal, setCurrTotal] = useState(0)

    useEffect(()=>{
        const cartArr = JSON.parse(localStorage.getItem('cart')) ?? []
        const total = cartArr.reduce((acc, currProd) => acc + (currProd.prod_price * currProd.count), 0)

        setCurrTotal(total)

        setCurrCart(cartArr)
    }, [])

    const removeProd = (evt) => {
        let prodId = evt.target.dataset.prodId

        let foundIndex = currCart.findIndex(prod => Number(prodId) === prodId)
        let cartArr = {...currCart}
        cartArr.splice(foundIndex, 1)

        localStorage.setItem('cart', JSON.stringify(cartArr))
        setCurrCart(cartArr)
        updatePrice(cartArr)
    }

    const changeProdCount = (evt) => {
        if(evt.target.value === '0'){
            removeProd(evt)
            return;
        }

        let prodId = evt.target.dataset.prodId
        

        let cartArr = {...currCart}
        let foundItem = cartArr.find(prod => Number(prodId) === prod.id)
        let foundIndex = cartArr.findIndex(prod => Number(prodId) === prod.id)

        foundItem.count = evt.target.value
        cartArr[foundIndex] = foundItem

        localStorage.setItem('cart', JSON.stringify(cartArr))
        setCurrCart(cartArr)
        updatePrice(cartArr)
    }

    const updatePrice = (cartArr) => {
        const total = cartArr.reduce((acc, currProd) => acc + (currProd.prod_price * currProd.count), 0)

        setCurrTotal(total)
    }

    return(
        <MainLayout>
            <section className="pt-20">
                <div className="cont mx-auto">
                    <div className="pb-5">
                        {
                            currCart.map(currProd => (
                                <div className="flex items-center" key={currProd.id}>
                                    <figure className="w-48">
                                        <img src={`${import.meta.env.VITE_API_URL}/image/${currProd.prod_img}`} alt={currProd.prod_name}/>
                                    </figure>
                                    <div className="gro">
                                        <h3 className="text-xl font-bold uppercase">{currProd.prod_name}</h3>
                                        <p>{currProd.prod_desc}</p>
                                    </div>
                                    <div>
                                        <div className="flex gap-9">
                                            <input type="number" defaultValue={currProd.count} className="w-8 border-2" data-prod-id={currProd.id} onChange={changeProdCount}/>
                                            <span className="font-bold">R{currProd.prod_price}each</span>
                                        </div>
                                        <button className="float-right font-bold mt-3 uppercase text-girlcode-pink" data-prod-id={currProd.id} onClick={removeProd}>Remove</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-between pt-5 border-t-2 border-gray-200">
                        <div className="text-xl font-bold uppercase">Total:</div>
                        <div className="text-xl font-bold">R{currTotal}</div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Cart
