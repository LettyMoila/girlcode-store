import logo from "../assets/girlcode_img.jpg"

const Navbar = () =>{
                   return(
        <div className="nav-bar py-6">
            <div className="container ma-auto flex justify-between items-center">
                <a href="#" className="a-46 block">
                    <img src={logo} alt="girlcode store logo"/>
                </a>

                <ul className="flex gap-6">
                    <li>
                        <a href="#" className="font-bold">Categories</a>
                    </li>
                    <li>
                        <a href="#" className="font-bold">Deals</a>
                    </li>
                    <li>
                        <a href="#" className="font-bold">What&apos;s new</a>
                    </li>
                    <li>
                        <a href="#" className="font-bold">Delivery</a>
                    </li>
                </ul>

                <div className="flex gap-6 items-center">
                    <form  className="bg-aLate-300 w-fit py-1.5 px-5 rounded-pxl">
                        <input type="text" name="search" placeholder="Search Products" className="outline-0 bg-transparent"/>
                        <button>
                            <span className="material-symbol-outlined align-middle">search</span>
                        </button>
                    </form>
                    <a href="" className="font-bold"><span className="material-symbols-outlined align-middle"></span>Account</a>
                    <a href="" className="font-bold"><span className="material-symbols-outlined align-middle"></span>Cart</a>
                </div>
            </div>
        </div>
    )
} 

export default Navbar;