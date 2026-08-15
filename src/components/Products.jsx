import { useState } from "react";

import products from "../data/products";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

function Products({ onAddToCart }) {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchText, setSearchText] =
    useState("");

  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) => product.category
      )
    )
  ];

  const filteredProducts = products.filter(
    (product) => {

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const search = searchText.toLowerCase();

const matchesSearch =
  product.name
    .toLowerCase()
    .includes(search) ||

  product.keywords?.some(
    (keyword) =>
      keyword
        .toLowerCase()
        .includes(search)
  );

      return (
        matchesCategory &&
        matchesSearch
      );
    }
  );

  return (
    <section
      className="products"
      id="products"
    >

      <div className="products-header">

        <div>

          <p className="subtitle">
            OUR PRODUCTS
          </p>

          <h2>
            What do you need?
          </h2>

        </div>

        <p>
          Select a product and choose the
          required size. Prices are not displayed.
        </p>

      </div>


      {/* Search */}

      <div className="search-box">

        <span>
          🔍
        </span>

        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value)
          }
        />

      </div>


      {/* Categories */}

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />


      {/* Products */}

      {filteredProducts.length > 0 ? (

        <div className="product-grid">

          {filteredProducts.map(
            (product) => (

              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />

            )
          )}

        </div>

      ) : (

        <div className="no-products">

          <div>
            🔍
          </div>

          <h3>
            Product not found
          </h3>

          <p>
            Can't find what you're looking for?
            Add it manually to your order below.
          </p>

        </div>

      )}

    </section>
  );
}

export default Products;