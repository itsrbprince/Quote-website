import React from "react";
import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { Blog } from './Blog'

const imageurl =
'https://images.unsplash.com/photo-1560251085-d9c1dc542960?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
export const Searchfilter = () => {
  const [data, setData] = useState([]); // State to store the fetched data
  const [filteredData, setFilteredData] = useState(""); // State to store the filtered data
  const [show, List] = useState([]);

  //pagination
  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const numberOfPage = Math.ceil(data.length / itemPerPage);
  const pageIndex = Array.from({ length: numberOfPage }, (_, idx) => idx + 1);

  // API fetch

  useEffect(() => {
    // Fetch the JSON data using the Fetch API
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((jsonData) => {
        let value = jsonData.quotes;
        List(value);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  {
    /*filterdata by search --*/
  }

  useEffect(() => {
    if (filteredData == "") {
      setData(show);
    } else {
      let fi = show.filter(
        (item) =>
          item.quote.toLowerCase().includes(filteredData.toLowerCase()) ||
          item.author.toLowerCase().includes(filteredData.toLowerCase())
         
      );
      console.log(fi.length, "kkkk");
      setData(fi);
    }
  }, [filteredData, show]);

  return (
    <div id="div" className="bg-black bg-cover bg-no-repeat bg-center max-md:bg-contain bg-fixed"
    style={{
      backgroundImage: `url(${imageurl})`
    }}
    >
     <Cards/>
      <div className="pt-9 ml-9">
        <label className="text-base text-red-900 font-bold">
          Filter:{" "}
        </label>
        <input
          type="text"
          placeholder="Type here..."
          onChange={(e) => setFilteredData(e.target.value)}
          className="rounded-full shadow-lg shadow-red-900 h-5 flex justify-center -mt-5 ml-20"
        />
      </div>
      <table className="mt-9 flex-grow-0 w-full">
        <tr id="head">
          <td className="pl-9 pb-9 text-red-900 justify-center text-2xl max-md:text-lg flex font-extrabold">
            Quotes
          </td>
          {/* data implement */}
        </tr>
        {data.length > 0 ? (
          data
            .slice(itemPerPage * currentPage, (currentPage + 1) * itemPerPage)
            .map((item) => (
              <tr
                id="quote"
                className="ml-9 text-slate-300 shadow-slate-800 shadow-inner"
              >
                <div
                  id="div"
                  className=" ml-9 mr-9 rounded-lg mb-8"
                >
                  <td className="pl-9 pt-5">{item.quote}</td>
                  <td className="flex justify-end pr-9"> - {item.author}</td>
                </div>
              </tr>
            ))
        ) : (
          <div className=" ml-9 mr-9 bg-black/90 rounded-lg mb-8">
            <td className="pl-9 pt-5 text-white">"No Data Matched..</td>
          </div>
        )}
      </table>

      <div className="flex justify-center mt-5 pb-4">
        <button
          disabled={currentPage < 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-orange-950 mr-1.5 text-slate-200 shadow-inner shadow-black rounded-full roun text-xs w-12"
        >
          Prev
        </button>

        {pageIndex
          .slice(
            Math.max(0, currentPage - 2),
            Math.min(numberOfPage, currentPage + 3)
          )
          .map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum - 1)}
              className="text-slate-200 shadow-black shadow-inner bg-orange-950 rounded-3xl w-6 items-center mr-1 dark:hover:bg-blue-500 focus:bg-blue-500 focus:text-black"
            >
              {pageNum}
            </button>
          ))}

        <button
          disabled={currentPage >= numberOfPage - 1}
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-orange-950 text-slate-200 shadow-inner shadow-black rounded-full roun text-xs w-12"
        >
          Next
        </button>
      </div>
     <Blog></Blog>
    </div>
  );
};
