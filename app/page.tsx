export default function Home() {
    return (
        <section className="relative w-full h-[600px] md:h-[800px] lg:h-screen flex items-center justify-center overflow-hidden">
            
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/fotkazgoogle.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-wider mb-4 drop-shadow-lg leading-tight">
                    Nakupujte jen to<br />co máte rádi!
                </h1>
                
                <p className="text-base md:text-lg text-gray-100 mb-8 drop-shadow-md">
                    Láskou vybrané produkty přímo z<br className="hidden md:block" /> naší fake api!.
                </p>

                <a href="/products">
                  <button 
                      
                      className="bg-[#00cfa1] hover:bg-[#00b38a] text-white font-bold text-sm md:text-base py-3 px-8 rounded transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                      Nakupovat
                  </button>
                </a>
                
            </div>
        </section>
    );
}