const Categories = () => {

    return(
        <section className="pt-20">
            <div className="container mx-auto">
                <div className="text-2xl font-extrabold">
                    <h2 className="">Shop Our Top Categories</h2>
                </div>
                <div className="grid grid-cols-6">
                    <div className="rounded-lg overflow-hidden relative">
                        <img />
                        <h3 className="absolute left-1/2 top-3 text-xl font-extrabold -translate-x-1/2">Furniture</h3>
                    </div>
                    <div className="rounded-lg overflow-hidden relative">
                        <img />
                        <h3 className="absolute left-1/2 top-3 text-xl font-extrabold -translate-x-1/2">Hand Bag</h3>
                    </div>
                    <div className="rounded-lg overflow-hidden relative">
                        <img />
                        <h3 className="absolute left-1/2 top-3 text-xl font-extrabold -translate-x-1/2">Books</h3>
                    </div>
                    <div className="rounded-lg overflow-hidden relative">
                        <img />
                        <h3 className="absolute left-1/2 top-3 text-xl font-extrabold -translate-x-1/2">Tech</h3>
                    </div>
                    <div className="rounded-lg overflow-hidden relative">
                        <img />
                        <h3 className="absolute left-1/2 top-3 text-xl font-extrabold -translate-x-1/2">Sneakers</h3>
                    </div>
                    <div className="rounded-lg overflow-hidden relative">
                        <img />
                        <h3 className="absolute left-1/2 top-3 text-xl font-extrabold -translate-x-1/2">Travel</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories 
