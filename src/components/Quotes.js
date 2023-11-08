import React, { useState, useEffect } from "react";
import twitterIcon from "../twitter.svg";
import tumblrIcon from "../tumblr.svg";

const imageurl = 
'https://images.unsplash.com/photo-1472566316349-bce77aa2a778?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    gettingQuote();
  }, []);

  const gettingQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let quotes = data.quotes;
        let randomNum = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomNum];
        console.log(randomQuote);
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const clickEvent = () => {
    gettingQuote();
  };

  return (
    <div id="" className="text-white bg-cover bg-no-repeat lg:text-xsm bg-center shadow-lg shadow-red-950"
    style={{
      backgroundImage: `url(${imageurl})`, 
    }}
    >
      <div className="text-base font-bold pt-32 flex justify-center text-white">
        - Today's Motivational Line -
      </div>
      <div className="mt-32 pl-5 pr-5 max-lg:text-xs max-md:mt-12 max-md:h-32 h-48">
        <div>
          {" "}
          <p>{quote}</p>
        </div>
        <div className="flex justify-end pt-5">
          <p>Author - {author}</p>
        </div>
      </div>

      <div id="buttons" className="">
        <div className="social-media-icons pb-6 flex justify-start max-md:pb-4 pl-2 lg:pl-5">
          <a
            id="tweet-quote"
            href="http://twitter.com/intent/tweet/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img src={twitterIcon} alt="" />
            </span>
          </a>
          <a
            id="tumblr-quote"
            href="https://www.tumblr.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img src={tumblrIcon} alt="" />
            </span>
          </a>
        </div>
        <div className="order-8 pr-2 lg:pr-5">
          <button onClick={clickEvent} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
