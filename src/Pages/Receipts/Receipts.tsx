import generatePDF from "react-to-pdf"
import { AlterraReceipt } from "@/Components/PDFs/AlterraReceipt";
import { useRef } from "react";
import { useCart } from "@/Hooks/useCart";
import { useParams } from "react-router-dom";

export default function Receipt() {
   const { orders } = useCart();
   const { orderId } = useParams();
   const targetRef = useRef(null);
   const orderInfo = orders.find((order) => order.id === Number(orderId));

  return (
    <>
      <section className="p-10 flex flex-col items-center w-full">
        <div className="w-3/5">
        <button
          onClick={() =>
            generatePDF(targetRef, { filename: "Alterra_Recibo.pdf" })
          }
          className="bg-blue_light hover:bg-blue_dark transition p-2 px-10 rounded-lg font-bold text-white mb-3"
        >
          Baixar Recibo
        </button>
          <div ref={targetRef}>
            {
               orderInfo && (<AlterraReceipt orderInfo={orderInfo}/>)
            }
          </div>
        </div>
      </section>
    </>
  );
}
