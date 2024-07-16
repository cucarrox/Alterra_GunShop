import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Bank,
  Basket,
  Coins,
  CreditCard,
  CurrencyBtc,
  CurrencyDollar,
  Money,
  Parachute,
  PixLogo,
  Trash,
} from "@phosphor-icons/react";
import { equipaments } from "../../../data.json";
import { useCart } from "@/Hooks/useCart";
import { QuantityInput } from "@/Components/Form/QuantiyInput";
import { TextInput } from "@/Components/Form/TextInput";
import { PaymentMethodButton } from "../../Components/Form/PaymentMethodButton";

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash" | "florins" | "bitcoin" | "pix";
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "UF"),
  paymentMethod: z.enum(["credit", "debit", "cash", "florins", "bitcoin", "pix"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 53.5;

export function Cart() {
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }

    checkout(data);
  };

  return (
    <>
      <section>
        <form
          onSubmit={handleSubmit(handleOrderCheckout)}
          className="flex justify-center p-10 gap-10"
        >
          <div>
            <h1 className="font-bold text-xl my-5">Complete seu pedido</h1>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex">
                <div className="mr-2">
                  <Parachute className="w-8 h-8 text-blue_light" />
                </div>
                <div>
                  <h1>Endereço de Entrega</h1>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>
              <div>
                <div>
                  <TextInput
                    placeholder="CEP"
                    type="number"
                    error={errors.cep}
                    {...register("cep", { valueAsNumber: true })}
                  />
                  <TextInput
                    placeholder="Rua"
                    error={errors.street}
                    {...register("street")}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-3">
                  <TextInput
                    placeholder="Número"
                    error={errors.number}
                    {...register("number")}
                  />
                  <div className="relative w-full">
                    <TextInput
                      placeholder="Complemento"
                      optional
                      error={errors.fullAddress}
                      {...register("fullAddress")}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <TextInput
                    placeholder="Bairro"
                    error={errors.neighborhood}
                    {...register("neighborhood")}
                  />
                  <div className="w-full">
                    <TextInput
                      placeholder="Cidade"
                      error={errors.city}
                      {...register("city")}
                      className="w-full"
                    />
                  </div>
                  <div className="w-[15%]">
                    <TextInput
                      placeholder="UF"
                      maxLength={2}
                      error={errors.state}
                      {...register("state")}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg mt-5">
              <div className="flex">
                <div className="mr-2">
                  <CurrencyDollar className="w-8 h-8 text-blue_light" />
                </div>
                <div>
                  <h1 className="text-[17px]">Pagamento</h1>
                  <p>
                    O envio é somente após o pagamento. Escolha a forma que
                    deseja pagar.
                  </p>
                  <p className="text-xs text-gray-500 pt-1">
                    Caso a forma de pagamento for em dinheiro ou florins,
                    dirija-se a uma agência Alterra mais próxima para efetuar o
                    pagamento.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center pt-8">
                <div className="flex w-full justify-around gap-6">
                  <PaymentMethodButton
                    isSelected={selectedPaymentMethod === "credit"}
                    {...register("paymentMethod")}
                    value="credit"
                  >
                    <CreditCard className="w-6 h-6 text-blue_dark" />
                    <span>CARTÃO DE CRÉDITO</span>
                  </PaymentMethodButton>
                  <PaymentMethodButton
                    isSelected={selectedPaymentMethod === "debit"}
                    {...register("paymentMethod")}
                    value="debit"
                  >
                    <Bank className="w-6 h-6 text-blue_dark" />
                    <span>CARTÃO DE DÉBITO</span>
                  </PaymentMethodButton>
                  <PaymentMethodButton
                    isSelected={selectedPaymentMethod === "cash"}
                    {...register("paymentMethod")}
                    value="cash"
                  >
                    <Money className="w-6 h-6 text-blue_dark" />
                    <span>DINHEIRO</span>
                  </PaymentMethodButton>
                </div>
                <div className="flex w-full justify-around gap-6 pt-6">
                  <PaymentMethodButton
                    isSelected={selectedPaymentMethod === "florins"}
                    {...register("paymentMethod")}
                    value="florins"
                  >
                    <Coins className="w-6 h-6 text-blue_dark" />
                    <span>FLORINS</span>
                  </PaymentMethodButton>
                  <PaymentMethodButton
                    isSelected={selectedPaymentMethod === "bitcoin"}
                    {...register("paymentMethod")}
                    value="bitcoin"
                  >
                    <CurrencyBtc
                      weight="fill"
                      className="w-6 h-6 text-blue_dark"
                    />
                    <span>BITCOIN</span>
                  </PaymentMethodButton>
                  <PaymentMethodButton
                    isSelected={selectedPaymentMethod === "pix"}
                    {...register("paymentMethod")}
                    value="pix"
                  >
                    <PixLogo className="w-6 h-6 text-blue_dark" />
                    <span>PIX</span>
                  </PaymentMethodButton>
                </div>
                {errors.paymentMethod ? (
                  <div role="alert">{errors.paymentMethod.message}</div>
                ) : null}
              </div>
            </div>
          </div>
          {/* Caixa de confirmação */}
          <div>
            <h1 className="font-bold text-xl my-5">
              Equipamentos Selecionados
            </h1>
            <div className="bg-gray-100 p-8 rounded-tr-[40px] rounded-bl-[40px] rounded-tl-md rounded-br-md">
              <div className="max-h-[430px] overflow-auto">
                {gunsInCart.map((gun) => (
                  <Fragment key={gun.id}>
                    <div className="flex gap-7 justify-between border-b-[1px] pt-3 pb-7">
                      <div className="flex gap-2">
                        <img
                          className="w-[130px]"
                          src={gun.image}
                          alt={gun.title}
                        />
                        <div className="flex flex-col justify-center">
                          <span className="my-2">{gun.title}</span>
                          <div className="flex gap-2">
                            <QuantityInput
                              quantity={gun.quantity}
                              incrementQuantity={() =>
                                handleItemIncrement(gun.id)
                              }
                              decrementQuantity={() =>
                                handleItemDecrement(gun.id)
                              }
                            />
                            <button
                              onClick={() => handleItemRemove(gun.id)}
                              className="flex items-center gap-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition p-2 px-2 text-sm text-gray-500"
                            >
                              <Trash className="w-5 h-5 text-blue_light" />
                              REMOVER
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <aside className="font-bold text-gray-600">
                          $ {gun.price?.toFixed(2)}
                        </aside>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div>
                <div className="flex justify-between my-2">
                  <p>Total de itens</p>
                  <span className="text-gray-500">
                    {new Intl.NumberFormat("en-gb", {
                      currency: "GBP",
                      style: "currency",
                    }).format(totalItemsPrice)}
                  </span>
                </div>
                <div className="flex justify-between my-2">
                  <p>Entrega</p>
                  <span className="text-gray-500">
                    {new Intl.NumberFormat("en-gb", {
                      currency: "GBP",
                      style: "currency"
                    }).format(shippingPrice)}
                  </span>
                </div>
                <div className="flex justify-between my-2 font-bold text-xl w-full">
                  <h1>Total</h1>
                  <span>
                    {new Intl.NumberFormat("en-gb", {
                      currency: "GBP",
                      style: "currency",
                    }).format(totalItemsPrice + shippingPrice)}
                  </span>
                </div>
                <button className="bg-blue_light mt-5 flex justify-center gap-2 w-full px-5 py-2.5 rounded-lg font-bold text-white hover:bg-blue_dark transition">
                  <Basket className="w-6 h-6" />
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
