import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/amazonSlice";

const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productData = data.data;

  // Get the search term from Redux
  const searchTerm = useSelector((state) => state.amazon.searchTerm);

  // Local state for filters and sorting
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("name"); // Default sort by name
  const categories = [...new Set(productData.map((item) => item.category))]; // Unique categories

  // Filter products based on search term and selected category
  const filteredProducts = productData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Sort products based on selected option
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "nameAsc") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "nameDesc") {
      return b.title.localeCompare(a.title);
    } else if (sortOption === "priceAsc") {
      return a.price - b.price; // Sort by price ascending
    } else if (sortOption === "priceDesc") {
      return b.price - a.price; // Sort by price descending
    }
    return 0;
  });

  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Filter and Sort Options */}
      <div className="flex justify-between mt-28 mb-2">
        <select
          className="border border-gray-300 rounded-md p-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded-md p-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="nameAsc">Sort by Name A-Z</option>
          <option value="nameDesc">Sort by Name Z-A</option>
          <option value="priceAsc">Sort by Price Low to High</option>
          <option value="priceDesc">Sort by Price High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4"
            >
              <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
                {item.category}
              </span>
              <div className="w-full h-auto flex items-center justify-center px-4 relative group">
                <img className="w-52 h-64 object-contain" src={item.image} alt="" />
                <ul className="w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700">
                  <li className="productLi">
                    Compare{" "}
                    <span>
                      <ApiIcon />
                    </span>
                  </li>
                  <li className="productLi">
                    Add to Cart{" "}
                    <span>
                      <ShoppingCart />
                    </span>
                  </li>
                  <li className="productLi">
                    View Details{" "}
                    <span>
                      <ArrowCircleRightIcon />
                    </span>
                  </li>
                  <li className="productLi">
                    Add to Wish List{" "}
                    <span>
                      <FavoriteIcon />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="px-4 z-10 bg-white">
                <div className="flex justify-between items-center">
                  <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                    {item.title.substring(0, 20)}
                  </h2>
                  <p className="text-sm text-gray-600 font-semibold">${item.price}</p>
                </div>
                <div>
                  <p className="text-sm mb-1">{item.description.substring(0, 100)}...</p>
                  <div className="text-yellow-500">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        price: item.price,
                        category: item.category,
                        image: item.image,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500 text-xl">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
