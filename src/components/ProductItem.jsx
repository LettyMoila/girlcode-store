import { useEffect, useState } from 'react';

const ProductItem = ({prod_info}) =>{
    const [intNum, setIntNum] = useState('')
    const [centNum, setCentNum] = useState('')

    useEffect(()=>{
        if(price){
            const priceArr = price.toString().split('.')
            setIntNum(priceArr[0] ?? '00')
            setCentNum(priceArr[1] ?? '00')
        }
    }, [price])

    const prodPrice = (price) =>{
        return(
            <>
            <span className='align-top text-base'>R</span>{intNum}<span className='align-top text-base'>.{centNum}</span>
            </>
        )
    }
    return(
        <Link to={`/product/${prod_info.prod_slug}`} className="">
        <div className="rounded-xl overflow-hidden relative bg-gray-200">
            <img src={`${import.meta.env.VITE_API_URL}/image/${prod_info.prod_img}`} alt={prod_info.prod_name} className='w-full'/>
            <div className='absolute top-6 right-5 bg-white rounded-full w-10 h-10 text-center cursor-pointer hover:bg-red-400'>
             <span className="material-symbols-outlined leading-10">favorite</span>
            </div>
        </div>
        <div className='py-4'>
            <div className='flex justifify-between items-center'>
                <h3 className='text-xl font-bold'>{prod_info.prod_name}</h3>
                <div className='text-xl font-bold'>
                    {<prodPrice price={prod_info.prod_price}/>}
                </div>
            </div>
            <p className='text-sm text-gray-900 mt-2'>{prod_info.prod_desc}</p>
            <div className='flex my-2'>
                <ul className='flex'>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                </ul>
                <p>(121)</p>
            </div>
            <button className='btn-atc'>Add to Cart</button>
        </div>
    </Link>
    )
}

export default ProductItem
