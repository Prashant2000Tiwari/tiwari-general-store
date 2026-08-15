import { useState } from "react";

function Cart({
  cart,
  cartCount,
  onRemove,
  onUpdateQuantity,
  onAddCustomProduct,
  onSendOrder
}) {

  const [customProduct, setCustomProduct] = useState("");


  const handleAddCustomProduct = () => {

    const productName = customProduct.trim();

    if (!productName) {
      return;
    }

    onAddCustomProduct(productName);

    setCustomProduct("");
  };


  return (
    <section
      className="cart"
      id="order"
    >

      <div className="cart-header">

        <div>

          <p className="subtitle">
            YOUR ORDER
          </p>

          <h2>
            My Order
          </h2>

        </div>


        <span className="cart-count">
          {cartCount}{" "}
          item{cartCount !== 1 ? "s" : ""}
        </span>

      </div>


      {/* Cart items */}

      {cart.length === 0 ? (

        <div className="empty-cart">

          <div>
            🛒
          </div>

          <h3>
            Your order is empty
          </h3>

          <p>
            Add products from the list below.
          </p>

        </div>

      ) : (

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.cartId}
            >

              <div className="cart-item-info">

                <div className="cart-icon">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    ) : (
                      "📦"
                    )}
                  </div>


                <div>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.custom
                      ? "Custom product"
                      : item.variant
                    }
                  </p>

                </div>

              </div>


              {/* Quantity */}

              <div className="quantity">

                <button
                  onClick={() =>
                    onUpdateQuantity(
                      item.cartId,
                      -1
                    )
                  }
                >
                  -
                </button>


                <span>
                  {item.quantity}
                </span>


                <button
                  onClick={() =>
                    onUpdateQuantity(
                      item.cartId,
                      1
                    )
                  }
                >
                  +
                </button>

              </div>


              {/* Remove */}

              <button
                className="remove-button"
                onClick={() =>
                  onRemove(item.cartId)
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}


      {/* Custom product */}

      <div className="custom-product">

        <h3>
          Can't find what you need?
        </h3>

        <p>
          Type the product name below and
          add it to your order.
        </p>


        <div className="custom-product-form">

          <input
            type="text"
            placeholder="Example: Aashirvaad Atta 5 Kg"
            value={customProduct}
            onChange={(event) =>
              setCustomProduct(
                event.target.value
              )
            }
          />


          <button
            onClick={handleAddCustomProduct}
          >
            Add
          </button>

        </div>

      </div>


      {/* WhatsApp */}

      {cart.length > 0 && (

        <button
          className="whatsapp-button"
          onClick={onSendOrder}
        >
          📱 Send Order on WhatsApp
        </button>

      )}

    </section>
  );
}


export default Cart;