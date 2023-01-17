import React from "react";
import FlashCard from "./FlashCard";
import { AiFillThunderbolt } from "react-icons/ai";

const FlashDeals = ({ productItems }) => {
  return (
    <>
      <section className="flash_background">
        <div className="container">
          <div className="heading f_flex">
            <AiFillThunderbolt
              style={{
                color: "#e94569",
                margin: "10px",
              }}
            />
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems={productItems} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
