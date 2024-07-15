import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

//Imagens dos veiculos
import v1 from "@/../Public/Imgs/Veiculos/veiculo1.png";
import v2 from "@/../Public/Imgs/Veiculos/veiculo2.png";
import v3 from "@/../Public/Imgs/Veiculos/veiculo3.png";
import v4 from "@/../Public/Imgs/Veiculos/veiculo4.png";
import v5 from "@/../Public/Imgs/Veiculos/veiculo5.png";
import v6 from "@/../Public/Imgs/Veiculos/veiculo6.png";
import v7 from "@/../Public/Imgs/Veiculos/veiculo7.png";
import v8 from "@/../Public/Imgs/Veiculos/veiculo8.png";
import v9 from "@/../Public/Imgs/Veiculos/veiculo9.png";
import v10 from "@/../Public/Imgs/Veiculos/veiculo10.png";

export function Carrosel() {
  return (
    <>
      <Carousel
         className="[1820px]:w-[1820px]"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover"
              src={v1}
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover"
              src={v2}
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover"
              src={v3}
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover"
              src={v4}
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover"
              src={v5}
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover"
              src={v6}
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover"
              src={v7}
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover object-left"
              src={v8}
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover object-left"
              src={v9}
            />
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <img
              className="w-[380px] h-[200px] rounded-xl object-cover object-left"
              src={v10}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
