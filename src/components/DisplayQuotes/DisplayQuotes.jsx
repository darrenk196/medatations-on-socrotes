import React from "react";
import "./DisplayQuotes.css";

const DisplayQuotes = ({ quotes, name }) => {
  console.log(quotes);
  const quote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  const handleClick = () => {
    console.log("click");
  };
  return (
    <article className="cf center">
      <div className="fl w-50 bg-near-white tc">
        <div className="pa4">
          <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
            <p className="f5 f4-m f3-l lh-copy measure mt0">
              <div className="ph3 mb4">
                <button className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib navy">
                  {quote()}
                </button>
              </div>
            </p>
            <cite className="f6 ttu tracked fs-normal">― {name}</cite>
          </blockquote>
        </div>
      </div>
    </article>
  );
};

export default DisplayQuotes;
