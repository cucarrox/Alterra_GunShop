import alterraLogo from "../../../Public/Imgs/alterra_icon.png"

import { useCart } from "@/Hooks/useCart"
import { useParams } from "react-router-dom"

import { equipaments } from "../../../data.json";

export function AlterraReceipt() {
   const { orders } = useCart();
   const { orderId } = useParams();

   const orderInfo = orders.find((order) => order.id === Number(orderId))

   /*
   if (!orderInfo?.id) {
    return null;
   }
   */
  
   const {
      cart
    } = useCart();

   const gunsInCart = cart.map((item) => {
      const gunInfo = equipaments.find((guns) => guns.id === item.id);
  
      if (!gunInfo) {
         throw new Error("Invalid Equipament");
       }
       return {
         ...gunInfo,
         quantity: item.quantity,
       };
     });

    const totalItemsPrice = gunsInCart.reduce((previousValue, currentItem) => {
      return (previousValue += currentItem.price * currentItem.quantity);
    }, 0);

   return (
      <>
         <div className="border-2 w-1/2 h-full">
            <header className="flex justify-between border-orange-500 border-t-[15px] border-b-[15px]">
               <div className="bg-theme_dark p-2">
                  <img className="w-[70px]" src={alterraLogo} alt="" />
               </div>
               <div className="bg-theme_light flex flex-col p-2 justify-end">
                  <h1 className="text-white">Alterra Corps</h1>
                  <span>Id produto: {orderInfo?.id}</span>
               </div>
            </header>
            <main className="w-full flex flex-col justify-center pt-14">
               <table className="border-collapse w-[80%]">
                  <thead className="bg-orange-500 table w-full table-fixed">
                     <tr>
                        <th className="border-[1px] border-black p-1 px-5 w-[10%]">N°</th>
                        <th className="border-[1px] border-black p-1 px-5">Produto</th>
                        <th className="border-[1px] border-black p-1 px-5">Preço</th>
                        <th className="border-[1px] border-black p-1 px-5 w-[10%]">Qty</th>
                        <th className="border-[1px] border-black p-1 px-5">Total</th>
                     </tr>
                  </thead>
                  <tbody className="table w-full table-fixed">
                     <tr className="table w-full table-fixed border-t-[5px] border-transparent">
                        <td className="text-secondary p-1 px-5 leading-relaxed text-[0.850rem] bg-slate-100 w-[10%]"></td>
                        <td className="text-secondary p-1 px-5 leading-relaxed text-[0.850rem] bg-slate-100">{}</td>
                        <td className="text-secondary p-1 px-5 leading-relaxed text-[0.850rem] bg-slate-100">$100.00</td>
                        <td className="text-secondary p-1 px-5 leading-relaxed text-[0.850rem] bg-slate-100 w-[10%]">5</td>
                        <td className="text-secondary p-1 px-5 leading-relaxed text-[0.850rem] bg-slate-100">$500.00</td>
                     </tr>
                  </tbody>
               </table>
               <div>
                  <span>{orderInfo?.state}</span>
                  <span>{orderInfo?.city}</span>
                  <span>{orderInfo?.number}</span>
                  <span>{orderInfo?.neighborhood}</span>
               </div>
               <div>
                  <span>Total: {totalItemsPrice}</span>
               </div>
            </main>
         </div>
      </>
   )
}