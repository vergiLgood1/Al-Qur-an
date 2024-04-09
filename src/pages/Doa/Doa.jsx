import { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar'
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import Footer from '../../component/Footer';

const Doa = () => {
    const [doa, setDoa] = useState({});
    const { data: judul } = useFetch('https://open-api.my.id/api/doa');
    const { data: defaultDoa, loading } = useFetch('https://open-api.my.id/api/doa/1');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const results = judul.filter(item => item.judul.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }, [searchTerm, judul])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleGetDoa = async (id) => {
        const res = await axios.get(`https://open-api.my.id/api/doa/${id}`);
        setDoa(res.data);

        if (isMobile) {
            handleBlurSearch()
        }
    }

    const handleModalSearch = () => {
        setIsOpenSearch(!isOpenSearch)
    }

    const handleBlurSearch = () => {
        setIsOpenSearch(!isOpenSearch)
    }


    const ComponentDoa = ({ data }) => {
        return (
            <>
                <div className='p-4 bg-gradient-to-r from-green-400 to-green-600 rounded-lg background-animate'>
                    <p className='text-white font-bold text-center text-3xl uppercase'>{data.judul}</p>
                </div>
                <div className='p-4 rounded-lg bg-neutral-200 text-neutral-800'>
                    <p className='font-arab text-right text-gray-900 text-4xl py-6'>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
                    <p className='font-arab text-right text-gray-900 text-4xl py-5'>{data.arab}</p>
                    <p className='text-gray-900 md:mt-10 text-justify'>{data.latin}</p>
                    <p className='text-gray-900 md:mt-10 text-justify'>Artinya : {data.terjemah}</p>
                    <p></p>
                </div>
            </>

        )
    }

    return (
        <>
            <Navbar />
            <div className={`${!isMobile ? 'flex p-4 gap-4 ' : 'grid grid-cols-1'}`}>
                <div className={`flex-none ${isMobile ? 'hidden' : ''} w-[20rem] bg-white border border-sky-500 rounded-lg max-h-[calc(100vh-11rem)] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-neutral-200 scrollbar-thumb-rounded-full`}>
                    <div className="md:block top-0 sticky w-full p-2 bg-white">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="ml-2 w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search" onChange={e => setSearchTerm(e.target.value)} className="block w-full p-2 ps-10 text-sm border rounded-lg bg-gray-200 border-gray-600 placeholder-gray-900 text-gray-900 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                    </div>

                    <div className='grid grid-cols-1 p-3 gap-2'>
                        {searchResults.length > 0 ? searchResults.map(data => (
                            <button key={data.id} onClick={() => handleGetDoa(data.id)} className='bg-neutral-200 p-2 rounded-lg hover:bg-neutral-100 cursor-pointer border-2 border-sky-700 text-left'>
                                <p className='text-gray-900 text-md'>{data.id}. {data.judul}</p>
                            </button>
                        )) : (
                            <p className="text-gray-900 text-center">No results found.</p>
                        )}
                    </div>
                </div>

                {isMobile && (
                    <div className='w-full p-4 mx-auto'>
                        <input type="text" id="search" onFocus={handleModalSearch} onChange={e => setSearchTerm(e.target.value)} className="block w-full p-2 pl-8 text-sm border rounded-lg bg-gray-200 border-gray-600 placeholder-gray-900 text-gray-900 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                        {isOpenSearch && (
                            <div className='grid grid-cols-1 p-3 gap-2'>
                                {searchResults.length > 0 ? searchResults.map(data => (
                                    <button key={data.id} onClick={() => handleGetDoa(data.id)} className='bg-neutral-200 p-2 rounded-lg hover:bg-neutral-100 cursor-pointer border-2 border-sky-700 text-left'>
                                        <p className='text-gray-900 text-md'>{data.id}. {data.judul}</p>
                                    </button>
                                )) : (
                                    <p className="text-gray-900 text-center">No results found.</p>
                                )}
                            </div>
                        )}

                    </div>
                )}

                <div className={`flex-1 grid grid-cols-1 gap-3 p-4 ${isMobile ? 'mx-4' : ''} bg-white border border-sky-500 rounded-lg max-h-[calc(100vh-11rem)] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-neutral-400 scrollbar-thumb-rounded-full`}>
                    {!loading && (Object.keys(doa).length > 0 ? <ComponentDoa data={doa} /> : <ComponentDoa data={defaultDoa} />)}
                    <div className='flex items-center justify-between p-4 rounded-lg bg-neutral-200 text-neutral-800'>
                        <p className='font-bold'>Bagikan : </p>
                        <p className='flex items-center gap-2 mx-2 text-gray-400 text-sm overflow-x-auto p-2 rounded leading-normal whitespace-pre-line'>
                            <button className='background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer; outline: none;' aria-label='facebook'>
                                <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#3b5998"></circle><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path></svg>
                            </button>
                            <button className='background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer; outline: none;' aria-label='facebook'>
                                <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#3b5998"></circle><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path></svg>
                            </button>
                            {/* <button className='background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer; outline: none;' aria-label='facebook'>
                                <svg viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="31" fill="#3b5998"></circle><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path></svg>
                            </button> */}
                        </p>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Doa