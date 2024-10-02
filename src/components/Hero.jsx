
import SearchBar from './SearchBar';
import BookCarousel from './BookCarousel';
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

export default function Hero() {
  const elementRef = useRef(null);

  useEffect(() => {
    const annotation = annotate(elementRef.current, { type: 'highlight', color: '#87C21D', strokeWidth: 2 });
    
    const playIndefinitely = () => {
      annotation.show();

      setTimeout(() => {
        annotation.hide();
      }, 2000); // Time after which the annotation hides (adjust as necessary)
    };

    const intervalId = setInterval(playIndefinitely, 4000);
  }, []);

  return (
    <div className='py-20'>
      <div className='flex flex-col text-center items-center gap-5 py-20 px-4 mt-10'>
        <div className="bg-light-green rounded-full p-1 w-36 mb-5"><p className='font-montserrat font-bold text-lime-green text-xs'>Welcome to Jujube</p></div>
        <h1 className='font-montserrat font-bold text-4xl'>There is no <br /> friend as loyal <br /> as a <span ref={elementRef}>book.</span></h1>
        <SearchBar />
      </div>
      <BookCarousel />
    </div>
  )
}
