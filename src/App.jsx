import { useState } from "react";
import StoreInfo from "./components/StoreInfo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./components/About";
import store from "./config/store";
import OrderDetails from "./components/OrderDetails";
function App() {
  
  const [cart, setCart] = useState([]);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
  const addToCart = (product) => {

  const existingItem = cart.find(
    (item) =>
      item.id === product.id &&
      item.variant === product.variant
  );

  if (existingItem) {

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.cartId === existingItem.cartId
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  } else {

    const cartItem = {
      ...product,

      cartId: `${product.id}-${product.variant}`,

      quantity: 1
    };

    setCart((previousCart) => [
      ...previousCart,
      cartItem
    ]);
  }
};
 const addCustomProduct = (productName) => {

  const existingItem = cart.find(
    (item) =>
      item.custom &&
      item.name.toLowerCase() ===
      productName.toLowerCase()
  );

  if (existingItem) {

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.cartId === existingItem.cartId
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

    return;
  }

  const customItem = {
    id: `custom-${Date.now()}`,

    cartId: `custom-${Date.now()}`,

    name: productName,

    image: "📦",

    custom: true,

    quantity: 1
  };

  setCart((previousCart) => [
    ...previousCart,
    customItem
  ]);
};
  const removeFromCart = (cartId) => {

    setCart(
      cart.filter(
        (item) => item.cartId !== cartId
      )
    );
  };

  const updateQuantity = (
    cartId,
    change
  ) => {

    setCart(

      cart.map((item) => {

        if (item.cartId !== cartId) {
          return item;
        }

        return {
          ...item,
          quantity:
            item.quantity + change
        };

      }).filter(
        (item) => item.quantity > 0
      )

    );
  };
   const sendOrderToWhatsApp = () => {

  if (cart.length === 0) {
    alert("Please add at least one product.");
    return;
  }

  setShowOrderDetails(true);
};
const confirmWhatsAppOrder = (customer) => {

  const orderItems = cart.map(
    (item, index) => {

      if (item.custom) {
        return (
          `${index + 1}. ` +
          `${item.name} - ` +
          `Qty: ${item.quantity}`
        );
      }

      return (
        `${index + 1}. ` +
        `${item.name} - ` +
        `${item.variant} - ` +
        `Qty: ${item.quantity}`
      );
    }
  );

  let message = `
Hello ${store.name},

Customer Name: ${customer.name}

Order Type: ${customer.orderType}
`;

  if (customer.orderType === "Delivery") {

    message += `
Delivery Address:
${customer.address}
`;
  }

  message += `

Order Items:

${orderItems.join("\n")}

Please confirm availability and final amount.

Thank you.
`;

  const whatsappUrl =
    `https://wa.me/${store.whatsapp}` +
    `?text=${encodeURIComponent(message)}`;

  window.open(
    whatsappUrl,
    "_blank"
  );

  setShowOrderDetails(false);
};
  return (
    <div>

      <Header cartCount={cartCount} />

      <main>

        <Hero />

        <Products
          onAddToCart={addToCart}
        />

      <Cart
  cart={cart}
  cartCount={cartCount}
  onRemove={removeFromCart}
  onUpdateQuantity={updateQuantity}
  onAddCustomProduct={addCustomProduct}
  onSendOrder={sendOrderToWhatsApp}
/>
<About />
<StoreInfo />
{showOrderDetails && (

  <OrderDetails
    onConfirm={confirmWhatsAppOrder}
    onClose={() =>
      setShowOrderDetails(false)
    }
  />

)}
       

      </main>

    </div>
  );
}

export default App;