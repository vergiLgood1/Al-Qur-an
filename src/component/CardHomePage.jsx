import { Link } from "react-router-dom"
import {Navbar} from './Navbar'

function CardHomePage({ number, name, meaning, ayat, type, total }) {

    return (
        <>
            <Link to={`/surah/` + number}>
                {/* <div className="w-full rounded-3xl p-px bg-gradient-to-b hover:from-blue-800 hover:to-purple-800">
                    <div className="flex rounded-[calc(1.5rem-1px)] p-5 bg-white h-28">
                        <div className="flex-none align-top justify-center w-10">
                            <p className='text-gray-900 font-semibold'>{number}</p>
                        </div>

                        <div className='grid grid-cols-1 w-full'>
                            <div className='w-full flex gap-2 font-semibold'>
                                <h2 className="text-gray-900 uppercase">{name}</h2><span>-</span><span>({meaning})</span>
                                
                            </div>
                            <div className='grid grid-cols-2'>
                                <p className="text-gray-900">{type}</p>
                                <p className="text-gray-900">{total}</p>
                            </div>
                        </div>
                        <div className='flex w-20 content-center justify-center flex-col col-span-2'>
                            <h2 className='font-arab text-3xl text-gray-900 text-right'>{ayat}</h2>
                        </div>
                    </div>
                </div> */}
                <div className={`${localStorage.getItem("theme") === "dark"}`}>
                    <div className="card w-full bg-white shadow-xl border-2 border-[#DEDEDE] dark:bg-red-400">
                        <div className="card-body p-6">
                            <div className="flex gap-x-4">
                                <div className="flex-none align-top justify-center w-10 ">
                                    <div className="flex items-center w-full h-full bg-no-repeat bg-contain bg-center bg-[url('/public/svg/FrameNumber.svg')]">
                                        <p className="font-bold text-sm text-center ">{number}</p>
                                    </div>

                                </div>
                                <div className="grid grid-cols-1 w-full gap-y-2">
                                    <div className="flex font-bold gap-2 text-center items-center">
                                        <h2 className="card-title uppercase text-sm">{name}</h2>
                                        <span className="text-center items-center textarea-xs font-normal">({meaning})</span>
                                    </div>
                                    <div className="card-actions grid grid-cols-2 ">
                                        <p className="text-xs items-center font-normal">{type} - {total} Ayat</p>

                                    </div>
                                </div>
                                <div className='flex w-20 content-center justify-center flex-col col-span-2'>
                                    <h2 className='font-arab text-base text-right font-normal'>{ayat}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CardHomePage