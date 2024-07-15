import { Package, ShoppingCart, Sword, Timer } from "@phosphor-icons/react";
import { Carrosel } from "../../Components/Carrosel/Carrosel";

import { Card } from "../../Components/Card/Card";
import { equipaments } from "../../../data.json";

import spaceships from "../../../Public/Imgs/sapceships.png";

export function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <section className="[1820px]:w-[1820px] lg:p-8 lg:flex sm:p-20 p-5 justify-center">
          <div className="lg:w-[70%] xl:w-[50%] sm:w-full flex flex-col justify-center items-center xl:tracking-widest">
            <div className="w-[75%] flex flex-col">
              <h1 className="font-bold text-4xl leading-[1.5]">
                Encontre o companheiro ideal para qualquer hora do dia
              </h1>
              <p className="my-5 mb-8">
                Com o Alterra GunShop você recebe seu equipmanento onde estiver,
                a qualquer hora
              </p>
            </div>
            <div className="sm:flex justify-around gap-5">
              <div className="flex flex-col text-sm justify-around">
                <span className="flex items-center gap-2 mb-5">
                  <ShoppingCart
                    weight="fill"
                    className="w-9 h-9 bg-[#c47f17] rounded-full p-2 text-white"
                  />
                  Compra simples e segura
                </span>
                <span className="flex items-center gap-2 mb-5">
                  <Timer
                    weight="fill"
                    className="w-9 h-9 bg-[#dbac2c] rounded-full p-2 text-white"
                  />
                  Entrega rápida e rastreada
                </span>
              </div>
              <div className="flex flex-col text-sm justify-around">
                <span className="flex items-center gap-2 mb-5">
                  <Package
                    weight="fill"
                    className="w-9 h-9 bg-[#574f4d] rounded-full p-2 text-white"
                  />
                  A embalgem o mantem intacto
                </span>
                <span className="flex items-center gap-2 mb-5">
                  <Sword
                    weight="fill"
                    className="w-9 h-9 bg-[#8047f8] rounded-full p-2 text-white"
                  />
                  O item chega fresquinho até você
                </span>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden justify-center">
            <img
              className="w-[520px] h-[420px]"
              src={spaceships}
              alt="Space Ships"
            />
          </div>
        </section>
        <section className="w-[60%]">
          <h1 className="text-center mb-5 font-bold text-xl">
            Novidades futuras
          </h1>
          <Carrosel />
          <h2 className="text-center text-gray-400 text-xs mb-12 mt-2">
            Imagens ilustrativas
          </h2>
        </section>
        <section className="flex flex-col justify-center">
          <h1 className="p-5 text-3xl font-bold">Nossos Equipamentos</h1>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3-2 md:grid-cols-2 sm:grid-cols-1 ">
            {equipaments.map((equipament) => (
              <Card key={equipament.id} guns={equipament} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
