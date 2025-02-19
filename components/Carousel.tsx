'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper-custom.css'; // Import the custom styles

interface FlyerCarouselProps {
  className?: string; // Optional Tailwind CSS classes
}

export default function FlyerCarousel({ className }: FlyerCarouselProps) {
  // Image paths in the public directory
  const flyers = [
    "/flyer1.jpeg",
    "/flyer2.jpeg",
    "/flyer3.jpeg",
    "/flyer4.jpeg",
    "/flyer5.jpeg",
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className={className}  // Apply optional CSS classes
    >
      {flyers.map((flyer, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[700px]">
            <div className="relative h-96 md:h-[700px]"> {/* Adjust heights for responsiveness */}
              <Image
                src={flyer}
                alt={`Flyer ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw" // Simplify sizes for full-width carousel
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}