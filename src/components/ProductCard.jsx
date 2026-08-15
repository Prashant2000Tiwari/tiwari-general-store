import { useState } from "react";

function ProductCard({ product, onAddToCart }) {

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]
  );

  const handleAdd = () => {

    onAddToCart({
      ...product,
      variant: selectedVariant
    });

  };

  return (
    <div className="product-card">

    
      <div className="product-image">
        {product.image?.startsWith("/") ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          product.image
        )}
      </div>

      <div className="product-details">

        <small>
          {product.category}
        </small>

        <h3>
          {product.name}
        </h3>

        <select
          value={selectedVariant}
          onChange={(event) =>
            setSelectedVariant(event.target.value)
          }
        >

          {product.variants.map((variant) => (

            <option
              key={variant}
              value={variant}
            >
              {variant}
            </option>

          ))}

        </select>

      </div>

      <button
        className="add-button"
        onClick={handleAdd}
      >
        + Add
      </button>

    </div>
  );
}

export default ProductCard;