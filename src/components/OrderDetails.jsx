import { useState } from "react";

function OrderDetails({ onConfirm, onClose }) {

  const [name, setName] = useState("");

  const [orderType, setOrderType] =
    useState("Pickup");

  const [address, setAddress] =
    useState("");


  const handleSubmit = (event) => {

    event.preventDefault();

    const customerName = name.trim();

    if (!customerName) {
      return;
    }

    if (
      orderType === "Delivery" &&
      !address.trim()
    ) {
      return;
    }

    onConfirm({
      name: customerName,
      orderType,
      address: address.trim()
    });
  };


  return (
    <div className="order-modal-overlay">

      <div className="order-modal">

        <div className="order-modal-header">

          <div>
            <p className="subtitle">
              ORDER DETAILS
            </p>

            <h2>
              Confirm Your Order
            </h2>
          </div>

          <button
            className="close-button"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        <form onSubmit={handleSubmit}>

          {/* Customer Name */}

          <div className="form-group">

            <label>
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
            />

          </div>


          {/* Order Type */}

          <div className="form-group">

            <label>
              Order Type
            </label>

            <div className="order-type-options">

              <label className="radio-option">

                <input
                  type="radio"
                  value="Pickup"
                  checked={
                    orderType === "Pickup"
                  }
                  onChange={(event) =>
                    setOrderType(
                      event.target.value
                    )
                  }
                />

                <span>
                  🏪 Pickup from Store
                </span>

              </label>


              <label className="radio-option">

                <input
                  type="radio"
                  value="Delivery"
                  checked={
                    orderType === "Delivery"
                  }
                  onChange={(event) =>
                    setOrderType(
                      event.target.value
                    )
                  }
                />

                <span>
                  🛵 Delivery
                </span>

              </label>

            </div>

          </div>


          {/* Delivery Address */}

          {orderType === "Delivery" && (

            <div className="form-group">

              <label>
                Delivery Address
              </label>

              <textarea
                placeholder="Enter your delivery address"
                value={address}
                onChange={(event) =>
                  setAddress(
                    event.target.value
                  )
                }
                rows="3"
              />

            </div>

          )}


          {/* Buttons */}

          <div className="order-modal-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="confirm-order-button"
            >
              📱 Send on WhatsApp
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default OrderDetails;