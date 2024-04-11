import { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar'
import Hero from '../../component/HeroSection'
import CardHomePage from '../../component/CardHomePage'
import useFetch from '../../hooks/useFetch'
import Footer from '../../component/Footer';


function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const { data } = useFetch('https://equran.id/api/v2/surat');

    useEffect(() => {
        const results = data.filter(item => item.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }, [searchTerm, data])

    return (
        <>  
            
            <Navbar />
            <Hero/>
            <div className='grid grid-cols-1 bg-red-400'>
                <div className='w-[60%] mt-[50px] mx-auto relative'>
                    <label className="input input-bordered flex items-center gap-2">
                        <input id="search" type="text" className="grow" placeholder="Mau baca surah apa hari ini?" onChange={e => setSearchTerm(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <div className=''>

                    </div>
                </div>
            </div>
            <div className="container grid lg:grid-cols-3 md:grid-cols-1 gap-4 w-[90%] mt-[50px] mx-auto pb-6">
                {searchResults.length > 0 ? searchResults?.map((item) => (
                    <CardHomePage
                        key={item.nomor}
                        number={item.nomor}
                        name={item.namaLatin}
                        ayat={item.nama}
                        type={item.tempatTurun}
                        total={item.jumlahAyat}
                    />
                )) : <p className="text-gray-900 text-center">No results found.</p>}
            </div>
            <Footer />
        </>
    )
}

export default Home