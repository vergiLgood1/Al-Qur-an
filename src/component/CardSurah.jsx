import { useState } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';
import useSound from 'use-sound';

function CardSurah({ item }) {
    const PlayButton = ({ sound }) => {
        const [play, { pause }] = useSound(sound, {
            onplay: () => setIsPlaying(true),
            onend: () => setIsPlaying(false),
        });

        const [isPlaying, setIsPlaying] = useState(false);

        const togglePlay = () => {
            if (isPlaying) {
                pause();
            } else {
                play();
            }
            setIsPlaying(!isPlaying);
        };

        return (
            <button
                onClick={togglePlay}
                className='flex justify-center w-24 md:w-56 rounded-xl border-2 border-purple-200 px-5 py-3 text-base mb-3 font-medium text-gray-900 transition duration-200 hover:border-purple-600 active:border-purple-600'
            >
                {isPlaying ? <FiPause /> : <FiPlay />}
            </button>
        );
    };

    return (
        <div className='w-full rounded-3xl p-px bg-gradient-to-b hover:from-blue-800 hover:to-purple-800'>
            <div className='rounded-[calc(1.5rem-1px)] p-5 bg-white'>
                <div className='flex'>
                    <h4 className='text-gray-900 w-auto mr-1'>{item.nomorAyat}.</h4>
                    <PlayButton sound={item.audio['03']} />
                </div>
                <p className='font-arab text-right text-gray-900 text-5xl py-5'>
                    {item.teksArab}
                </p>
                <p className='text-gray-900 mt-5 md:mt-10 pb-1 text-justify'>
                    {item.teksLatin}
                </p>
                <p className='text-gray-900 md:mt-10 text-justify'>
                    Artinya : {item.teksIndonesia}
                </p>
            </div>
        </div>
    );
}

export default CardSurah;
