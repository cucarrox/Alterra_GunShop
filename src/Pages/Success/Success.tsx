import { useRef } from "react";
import generatePDF from "react-to-pdf"

import { useCart } from "@/Hooks/useCart";
import { Timer, MapPin, CurrencyGbp, Coins, CurrencyBtc, Bank, CreditCard, PixLogo } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

//import alterragif from "../../../Public/Imgs/Loading/alterraSpinGif.gif";
import styles from "./Success.module.css"
import alterraArms from "../../../Public/Imgs/alterraArms.png";

import spin1 from "../../../Public/Imgs/Loading/alterraSpin1.png"
import spin2 from "../../../Public/Imgs/Loading/alterraSpin2.png"
import { AlterraReceipt } from "@/Components/PDFs/AlterraReceipt";

export function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const targetRef = useRef();

  const orderInfo = orders.find((order) => order.id === Number(orderId));

  const paymentMethod = {
    pix: "Pix",
    florins: "Florins",
    bitcoin: "Bitcoin",
    cash: "Dinheiro",
    debit: "Cartão de débito",
    credit: "Cartão de crédito",
  };

  if (!orderInfo?.id) {
    return null;
  }

  function changePaymentMethodIcon() {
    switch (orderInfo?.paymentMethod) {
      case 'pix':
        return <PixLogo weight="fill" className="w-9 h-9 p-[7.5px] text-white bg-emerald-400 rounded-full" />;
      case 'florins':
        return <Coins weight="fill" className="w-9 h-9 p-[7.5px] text-white bg-emerald-400 rounded-full" />;
      case 'bitcoin':
        return <CurrencyBtc weight="fill" className="w-9 h-9 p-[7.5px] text-white bg-emerald-400 rounded-full" />;
      case 'cash':
        return <CurrencyGbp weight="fill" className="w-9 h-9 p-[7.5px] text-white bg-emerald-400 rounded-full" />;
      case 'debit':
        return <Bank weight="fill" className="w-9 h-9 p-[7.5px] text-white bg-emerald-400 rounded-full" />;
      case 'credit':
        return <CreditCard weight="fill" className="w-9 h-9 p-[7.5px] text-white bg-emerald-400 rounded-full" />;
      default:
        return null;
    }
  }

  return (
    <>
      <section className="flex justify-center items-center p-24 gap-24">
        <div>
          <h1 className="text-blue_light font-bold text-2xl leading-relaxed">Pedido Confirmado com sucesso!</h1>
          <p className="mb-8">Agora é só aguardar que logo o seu equipamento chegará até você</p>
          <div className="bg-gradient-to-r from-cyan-700 to-blue-600 p-1 rounded-tr-[40px] rounded-bl-[40px] rounded-tl-md rounded-br-md">
            <div className="w-full h-full bg-white px-14 py-3 rounded-tr-[38px] rounded-bl-[38px] rounded-tl-sm rounded-br-sm">
              <div className="flex items-center gap-2 my-7">
                <MapPin weight="fill" className="w-9 h-9 p-[7.5px] text-white bg-blue_light rounded-full" />
                <div className="flex flex-col">
                  <span>Entrega em <strong>{orderInfo.street}, {orderInfo.number}</strong></span>
                  <span>{orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 my-7">
                <Timer weight="fill" className="w-9 h-9 p-[7.5px] text-white bg-orange-400 rounded-full" />
                <div className="flex flex-col">
                  <span>Previsão de entrega</span>
                  <strong>1 dia - 2 dias</strong>
                </div>
              </div>
              <div className="flex items-center gap-2 my-7">
                {changePaymentMethodIcon()}
                <div className="flex flex-col">
                  <span>Forma de pagamento</span>
                  <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                </div>
              </div>
              <div className="flex justify-center">
                <button onClick={() => generatePDF(targetRef, {filename: "Alterra_Recibo.pdf"})} className="bg-blue_light p-2 px-5 rounded-lg font-bold text-white">Baixar Recibo</button>
                <div className="" ref={targetRef}>
                  <div>
                    <AlterraReceipt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center select-none">
          <div className={`${styles.loadingSpin} w-full h-[200px] flex justify-center items-center`}>
            <img className="w-[80px] sm:w-[200px]" src={spin2} />
            <img className="w-[80px] sm:w-[200px]" src={spin1} />
          </div>
          <div className="w-full flex justify-center items-center">
            <img className="pt-2" src={alterraArms} alt="Alterra Arms Logo" />
          </div>
        </div>
      </section>
    </>
  );
}
