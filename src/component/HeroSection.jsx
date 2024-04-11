import react from 'react';

const Hero = () => {
    return (
        <div className="hero place-items-stretch min-h-screen bg-base-200 ">
            <div className="flex flex-col text-center py-32">
                <h1 className="text-8xl font-bold ">Ramadhan 1445 H</h1>
            </div>
            <div className=''>
                <img src="/public/svg/mosque.svg" alt="" />
            </div>
        </div>
    );
}


export default Hero;