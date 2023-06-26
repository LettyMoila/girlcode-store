import { Link } from "react-router-dom"
import furn from '../assets/heroBackground.jpg'

const Categories = () => {
    const CatList = [
        {
            name: "furniture",
            path: "/category/furniture",
            catImg: furn
        },
        {
            name: "Hand bag",
            path: "/category/hand-bag",
            catImg: furn
        },
        {
            name: "Books",
            path: "/category/books",
            catImg: furn
        },
        {
            name: "Tech",
            path: "/category/tech",
            catImg: furn
        },
        {
            name: "Sneakers",
            path: "/category/sneakers",
            catImg: furn
        },
        {
            name: "Travel",
            path: "/category/travel",
            catImg: furn
        }
    ]

    return(
        <section className="pt-20">
            <div className="container mx-auto">
                <div className="text-2xl font-extrabold">
                    <h2 className="">Shop Our Top Categories</h2>
                </div>
                <div className="grid grid-cols-6">
                    (CatList.map(cat = {
                       <Link className="rounded-lg overflow-hidden relative" key={cat.name}>
                        <img src={cat.catImg} alt={'$(cat.name) Category'}/>
                        <h3 className="absolute left-1/2 top-3 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2">{cat.name}</h3>
                       </Link>
                    }))
                
                </div>
            </div>
        </section>
    )
}

export default Categories 
