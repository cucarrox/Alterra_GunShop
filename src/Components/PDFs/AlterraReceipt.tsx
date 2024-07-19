import alterraLogo from "../../../Public/Imgs/alterra_icon.png";
import { equipaments } from "../../../data.json";

interface OrderItem {
   id: string;
   quantity: number;
 }
 
 interface Order {
   id: number;
   street: string;
   number: string;
   neighborhood: string;
   city: string;
   state: string;
   paymentMethod: string;
   items: OrderItem[];
 }

interface Equipment {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface AlterraReceiptProps {
  orderInfo: Order;
}

export function AlterraReceipt({ orderInfo }: AlterraReceiptProps) {
  const gunsInCart = orderInfo.items.map((item) => {
    const gunInfo = equipaments.find((equip: Equipment) => equip.id === item.id.toString()); // Converte o ID do item para string

    if (!gunInfo) {
      throw new Error("Invalid Equipment");
    }

    return {
      ...gunInfo,
      quantity: item.quantity,
    };
  });

  // Calcula o preço total dos itens
  const totalItemsPrice = gunsInCart.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <div className="border-2 w-full h-full">
      <header className="flex justify-between border-orange-500 border-t-[15px] border-b-[15px] p-5">
        <img src={alterraLogo} alt="Alterra Logo" className="w-24" />
        <div className="text-center">
          <h1 className="text-xl font-bold">Recibo de Compra</h1>
          <p>Pedido ID: {orderInfo.id}</p>
        </div>
        <div></div>
      </header>
      <main className="p-5">
        <h2 className="text-lg font-bold">Itens no Pedido:</h2>
        {gunsInCart.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <span>{item.title}</span>
            <span>{item.quantity} x ${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between py-2 font-bold">
          <span>Total:</span>
          <span>${totalItemsPrice.toFixed(2)}</span>
        </div>
      </main>
    </div>
  );
}
