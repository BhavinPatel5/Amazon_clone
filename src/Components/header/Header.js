import React, { useState } from "react";
import { logo } from "../../Assets/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/amazonSlice"; // Import setSearchTerm action
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchTerm(query)); // Dispatch the search term to Redux
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full mx-auto bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>

        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver To <span className="text-sm font-semibold -mt-1 text-whiteText">Chikhli</span>
          </p>
        </div>

        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All
            <ArrowDropDownIcon />
          </span>
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
            placeholder="Search for products..."
            onChange={handleSearchChange} // Update search query in Redux
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">Hello, Sign in</p>
            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists
              <ArrowDropDownIcon />
            </p>
          </div>
        </Link>

        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>

        <Link to="/Cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
      </div>

      <HeaderBottom />
    </div>
  );
};

export default Header;
