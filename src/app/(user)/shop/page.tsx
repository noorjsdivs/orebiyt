"use client";
import Container from "@/components/Container";
import { products } from "@/lib/sanityClient";
import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { ProductProps } from "../../../../type";
import Product from "@/components/Product";
import ListProduct from "@/components/ListProduct";

const ShopPage = () => {
  const [showGrid, setShowGrid] = useState(true);
  const [showList, setShowList] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await products();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="flex items-center justify-between pb-10">
        <h2 className="text-2xl text-primeColor font-bold">All Proudcts</h2>
        <div className="flex items-center gap-4">
          <span
            onClick={() => {
              setShowGrid(true);
              setShowList(false);
            }}
            className={`${
              showGrid
                ? "bg-primeColor text-white"
                : "border-[1px] border-gray-300 text-[#737373]"
            } w-8 h-8 text-lg flex items-center justify-center cursor-pointer`}
          >
            <BsGridFill />
          </span>
          <span
            onClick={() => {
              setShowGrid(false);
              setShowList(true);
            }}
            className={`${
              showList
                ? "bg-primeColor text-white"
                : "border-[1px] border-gray-300 text-[#737373]"
            } w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
          >
            <ImList />
          </span>
        </div>
      </div>
      {showGrid ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {productData?.map((item: ProductProps) => (
            <Product key={item?._id} product={item} />
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-5">
          {productData?.map((item: ProductProps) => (
            <ListProduct key={item?._id} product={item} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default ShopPage;
