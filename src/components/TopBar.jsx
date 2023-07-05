const TopBar = () =>{
    return(
<header className="flex justify-between bg-[#e94154] font-primary text-white p-2.5">
    <div className="ml-20">
        <span className="align-middle"></span>
        <a href="tel:+27125689654"><span className="material-symbols-outlined">call</span>+27125689654</a>
    </div>
    <div className="bar-cta">
        <p>Get 50% off on selected items | <a href="#" className="underline">Shop Now</a></p>
    </div>
    <div className="mr-30">
        <ul>
            <li>Eng <span className="material-symbols-outlined">expand_more</span></li>
            <li>Location<span className="material-symbols-outlined">expand_more</span></li>
        </ul>
    </div>
    </header>
    )
}

export default TopBar;
