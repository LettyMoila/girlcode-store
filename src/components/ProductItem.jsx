import prodImage from '../assets/ipod.jpg'

const ProductItem = () =>{
    return(
        <div className="">
        <div className="rounded-xl overflow-hidden relative bg-gray-200">
            <img src={prodImage} alt="product" className='w-full'/>
            <div className='absolute top-6 right-6 bg-white rounded-full w-10 h-30 text-center cursor-pointer hover:bg-red-400'>
             <span className="material-symbols-outlined">favorite</span>
            </div>
        </div>
        <div className='py-4'>
            <div className='flex justifify-between items-center'>
                <h3 className='text-xl font-bold'>Homepod mini</h3>
                <div className='text-xl font-bold'>
                    <span className='align-top text-base'>R</span>299<span className='align-top text-base'>99</span>
                </div>
            </div>
            <p className='text-sm '>Table with air purifier</p>
            <div className='flex py-2'>
                <ul className='flex'>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                    <li><span class="material-symbols-outlined">star_rate</span></li>
                </ul>
                <p>(121)</p>
            </div>
            <button className='btn border-black hover:bg-girlcode-pink hover:text-white'>Add to Cart</button>
        </div>
    </div>
    )
}

export default ProductItem
