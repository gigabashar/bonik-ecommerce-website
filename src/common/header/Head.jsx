import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left-row">
            <BsFillTelephoneFill
              style={{
                fontSize: "20px",
                marginRight: "10px",
              }}
            />
            <label htmlFor="">+88059 8475 5584</label>
            <CgMail />
            <label htmlFor="">basharuligiga@gmail.com</label>
          </div>
          <div className="right row RText">
            <label htmlFor="">Theme FAQ's</label>
            <label for="">Need Helps</label>
            <span>🏳️‍⚧️</span>
            <label htmlFor="">EN</label>
            <span>🏳️‍⚧️</span>
            <label htmlFor="">USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
