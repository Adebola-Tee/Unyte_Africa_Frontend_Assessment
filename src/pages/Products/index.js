import React, { useEffect, useState } from "react";
import SearchBar from "../../components/sections/SearchBar/SearchBar";
import Items from "../../Utils/Items";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./Products.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import BottomLine from "../../components/atoms/BottomLine";

const Product = () => {
  const [searchItem, setSearchItem] = useState('');
  const [items, setItems] = useState(Items);

  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (location.pathname === "/" && items.length > 3) {
      setItems(items.slice(0, 5));
    }
  }, [inView, animation, location, items]);

  const SearchedItem = (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    setSearchItem(keyword);
    const filteredItems = Items.filter((item) =>
      item.name.toLowerCase().includes(keyword) || item.category.toLowerCase().includes(keyword)
    );
    setItems(filteredItems);
  };

  const ResetItem = () => {
    setItems(Items); // Reset to initial items
  };

  return (
    <div className={`${location.pathname !== "/" && "pt-16"} mt-16`}>
      <div>
        <SearchBar
          searchItem={searchItem}
          SearchedItem={SearchedItem}
          setSearchItem={setSearchItem}
          ResetItem={ResetItem}
        />
      </div>
      <div className="parent py-12">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-neutral text-center">
              Available Products
            </h3>
            <h1 className="text-4xl font-semibold text-center">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          {/* Items Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={item.id}
                className="item-container rounded-lg shadow-lg relative overflow-hidden"
                style={{ backgroundColor: "#313131" }}
              >
                <div className="item h-full">
                  <img
                    className="rounded-lg h-full w-full object-cover"
                    src={item.mainImage}
                    alt={item.name || "Item Image"}
                  />
                  <div className="price-overlay absolute top-2 right-2 p-2 bg-black text-white rounded-lg">
                    <p>${item.price}</p>
                  </div>
                  <div className="overlay">
                    <h3 className="text-2xl text-primary font-semibold">
                      {item.name}
                    </h3>
                    <Link
                      to={`/product/${item.id}`}
                      className="mt-3 inline-block"
                    >
                      <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-white hover:border-primary duration-500">
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {location.pathname === "/" && (
          <div className="mt-4 text-right">
            <Link
              to="/project"
              className="text-2xl hover:text-primary duration-300"
            >
              <button className="primary-button">
                <span>See All</span>
                <span>
                  <FiArrowRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
