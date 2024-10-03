import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import React from 'react';
import Card from './Card';


export default function BookCarousel() {
  return (
    <div className="">
      <Carousel
        showArrows={true}        
        showThumbs={false}        
        showStatus={false}        
        infiniteLoop={true}                 
        transitionTime={1000}      
        stopOnHover={false}       
        swipeable={false} 
      >


      {/* Slide 1 */}
      <div className="carouselSlide flex gap-1 justify-center w-full">
        <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781760850227/the-winter-dress-9781760850227_lg.jpg" />
        <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781760850227/the-winter-dress-9781760850227_lg.jpg" />
      </div>
        
      {/* Slide 2 */}
      <div className="carouselSlide flex gap-1 justify-center w-full mr-3">
        <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />
        <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />
      </div>
        {/* Slide 3 */}
        <div className="carouselSlide flex gap-1 justify-center w-full">
        <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />
        <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />

        </div>

         {/* Slide 3 */}
         <div className="carouselSlide flex gap-1 justify-center w-full">
         <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />
         <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />

          
        </div>

         {/* Slide 3 */}
         <div className="carouselSlide flex gap-1 justify-center w-full">
         <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />
         <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />

          
        </div>

         {/* Slide 3 */}
         <div className="carouselSlide flex gap-1 justify-center w-full">
         <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />
         <Card imgLink="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781771683609/if-you-knew-my-name-9781771683609_lg.jpg" />

          
        </div>
      </Carousel>
    </div>
  );
}
