
import SearchBar from './SearchBar';
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
      }, 2000); // Time after which the annotation hides
    };

    const intervalId = setInterval(playIndefinitely, 4000);
  }, []);

  return (
    <div className='py-20 sm:flex sm:flex-col sm:items-center'>
      <div className='lg:flex justify-between'>

        <div className='flex flex-col text-center items-center gap-5 py-20 px-4 mt-10 lg:text-left lg:items-baseline lg:pl-20 lg:gap-8'>
          <div className="bg-light-green rounded-full p-1 w-36 mb-5 lg:pl-4"><p className='font-plus font-bold text-lime-green text-xs'>Welcome to Jujube</p></div>
          <h1 className='font-plus font-bold text-4xl leading-[1.5] lg:text-6xl lg:leading-[1.2]'>There is no <br /> friend as loyal <br /> as a <span ref={elementRef}>book.</span></h1>
          <SearchBar />
        </div>

        <div className='hidden lg:inline'>
          <img src="/images/blobs.png" alt="blobs" className='-mt-64' />
        </div>

      </div>

      <img src="/images/book-decor.png" alt="" className='lg:hidden'/>
    </div>
  )
}
