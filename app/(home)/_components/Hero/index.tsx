"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import banner1 from "@/public/offer.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 md:px-8">
      <Carousel
        className="py-8"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image src={banner1} alt="offer" width={1200} height={400} />
          </CarouselItem>
          <CarouselItem>
            <Image src={banner1} alt="offer" width={1200} height={400} />
          </CarouselItem>
          <CarouselItem>
            <Image src={banner1} alt="offer" width={1200} height={400} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Hero;
