export default function Card(){
    return(
    <>
    <div className="flex mt-6 m-4 lg:hidden">
        <div className="card card-compact w-80 bg-white shadow-xl">
            <figure><img src="../../images/image-product-mobile.jpg" alt="perfume" /></figure>
            <div className="card-body">
                <h2 className="font-montserrat font-thin">P E R F U M E</h2>
                <h1 className="card-title font-fraunces text-[#1A1B1C]">Gabrielle Essence<br/>Eau De Parfum</h1>
                <p className="font-montserrat text-gray-500">A floral, solar and voluptuous<br/>interpretation composed by Olivier<br/>Polge, Perfumer-Creator for the
                House of CHANEL.</p>
                <div className="flex">
                    <p className="text-dark-cyan font-bold font-fraunces text-2xl">$149.99</p>
                    <p className="text-gray-500 font-thin font-montserrat line-through mr-24">$169.99</p>
                </div>
    
                <div className="card-actions flex items-center">
                    <button className="font-bold btn btn-wide btn-primary bg-dark-cyan border-transparent normal-case w-full hover:bg-[#1A4031] hover:border-transparent"><img src="../../images/icon-cart.svg"/>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    <div className="hidden lg:flex mt-6 m-4">
        <div className="card card-side bg-white shadow-xl">
            <figure><img src="../../images/image-product-desktop.jpg" alt="perfume" /></figure>
            <div className="card-body">
                <h2 className="font-montserrat font-thin">P E R F U M E</h2>
                <h1 className="card-title font-fraunces text-[#1A1B1C] text-5xl">Gabrielle<br/>Essence Eau<br/>De Parfum</h1>
                <p className="font-montserrat text-gray-500 text-lg mt-8 leading-loose">A floral, solar and voluptuous<br/>interpretation composed bys<br/> Olivier Polge, Perfumer-Creators<br/> for the
                House of CHANEL.</p>
                <div className="mb-16">
                <div className="flex mb-16">
                    <p className="text-dark-cyan font-bold font-fraunces text-5xl">$149.99</p>
                    <p className="text-gray-500 font-thin font-montserrat line-through mr-32">$169.99</p>
                </div>
    
                <div className="card-actions flex items-center">
                    <button className="text-lg btn btn-wide btn-primary bg-dark-cyan border-transparent normal-case w-full hover:bg-[#1A4031] hover:border-transparent"><img src="../../images/icon-cart.svg"/>Add to Cart</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}