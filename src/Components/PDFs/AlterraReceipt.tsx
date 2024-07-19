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
    const gunInfo = equipaments.find(
      (equip: Equipment) => equip.id === item.id.toString()
    ); // Converte o ID do item para string

    if (!gunInfo) {
      5;
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

  const shippingPrice = 53.5;

  return (
    <div className="border-2 w-full h-full">
      <header className="flex justify-between items-center border-orange-500 border-t-[15px] border-b-[15px] p-2">
        <img src={alterraLogo} alt="Alterra Logo" className="w-24" />
        <div className="text-center">
          <h1 className="text-xl font-bold">Recibo de Compra</h1>
          <p>Pedido ID: {orderInfo.id}</p>
        </div>
        <div></div>
      </header>
      <main className="p-5 w-full">
        <h2 className="text-lg font-bold mb-1">Endereço:</h2>
        <div className="flex flex-col ml-2 mb-5">
          <span>
            {orderInfo.city}, {orderInfo.state}
          </span>
          <span>{orderInfo.neighborhood}</span>
          <span>
            {orderInfo.street}, {orderInfo.number}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <table className="w-3/5">
            <thead className="bg-orange-500">
              <tr>
                <th>N°</th>
                <th>Produto</th>
                <th>Preço</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {gunsInCart.map((item, index) => (
                <tr key={item.id} className="border-white">
                  <td className="text-center bg-gray-100">{index + 1}</td>
                  <td className="text-center bg-gray-100">{item.title}</td>
                  <td className="text-center bg-gray-100">
                    {new Intl.NumberFormat("en-gb", {
                      currency: "GBP",
                      style: "currency",
                    }).format(item.price)}
                  </td>
                  <td className="text-center bg-gray-100">{item.quantity}</td>
                  <td className="text-center bg-gray-100">
                    {new Intl.NumberFormat("en-gb", {
                      currency: "GBP",
                      style: "currency",
                    }).format(item.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col justify-end py-2 mt-5 font-bold">
          <div>
            <span className="mr-2">Sub-Total:</span>
            <span>
              {new Intl.NumberFormat("en-gb", {
                currency: "GBP",
                style: "currency",
              }).format(totalItemsPrice)}
            </span>
          </div>
          <div>
            <span className="mr-2">Total:</span>
            <span>
              {new Intl.NumberFormat("en-gb", {
                currency: "GBP",
                style: "currency",
              }).format(totalItemsPrice + shippingPrice)}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
