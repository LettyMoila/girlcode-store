import bgimg from "../assets/heroBackground.jpg"

const HeroSection = () =>{

    return(
        <section className={`py-24 bg-hero-section bg-cover bg-center`}>
            <div className="container mx-auto">
                <div className="w-2.5">
                    <h1 className="text-6xl font-bold leading-tight text-girlcode-pink">Shopping And Department Store.</h1>
                <p className="text-xl mt-9">Shopping a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                <a href="#" className="bg-girlcode-pink text-white py-2 px-4 font-bold text-lg rounded-3xl mt-9 block w-fit">Learn more</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
