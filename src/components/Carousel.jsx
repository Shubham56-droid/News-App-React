import { useState, useEffect } from "react";

function Carousel({ newsArr, page, setPage, category, setCardData, query }) {
  const [data, setData] = useState(newsArr);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    setData(newsArr);
  }, [newsArr]);

  function addMore() {
    if (20 - data.length <= 1) {
      setPage((prev) => prev + 1);
    } else {
      setIsLoadMore(true);
    }
  }

  function handleNewsCard(val) {
    setCardData(val);
  }
  return (
    <>
      {console.log(newsArr)}
      <h2 className="font-monospace fs-1 mt-3 ps-4">Top News</h2>

      {category == "" && query == "" && (
        <div
          className="d-flex justify-content-start hide-scrollbar pe-4 position-relative"
          style={{
            height: "50vh",
            width: "100%",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            cursor: "pointer",
            overflowY: "hidden",
          }}
        >
          {data.slice(0, 7).map((e, i) => (
            <div
              className="ms-4 position-relative newOuterBox rounded-4"
              style={{ height: "50vh" }}
              key={i}
            >
              <div className="newBox rounded-4">
                <p className="text-light font-monospace fs-3 p-4">{e.title}</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light font-monospace fs-5 mt-5"
                    onClick={() => {
                      handleNewsCard(e);
                    }}
                  >
                    Full Arcticle
                  </button>
                </div>
              </div>
              <div style={{ height: "50vh" }} className="rounded-4">
                <img
                  src={e.urlToImage ? e.urlToImage : "newsDefaultImg.png"}
                  className="rounded-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "newsDefaultImg.png";
                  }}
                  style={{ height: "100%", width: "600px" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex flex-wrap ps-3 pe-3">
        {data.slice(7).map((newsVal, i) => (
          <div
            className="container w-50 mt-4 "
            style={{ height: "220px" }}
            key={i}
          >
            <div
              className="h-100 newsItem overflow-hidden d-flex"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <img
                src={
                  newsVal.urlToImage ? newsVal.urlToImage : "newsDefaultImg.png"
                }
                style={{ height: "100%", width: "50%" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "newsDefaultImg.png";
                }}
              />
              <div className="p-3 d-flex justify-content-between flex-column">
                <p className="fs-5" style={{ fontFamily: "sans-serif" }}>
                  {newsVal.title.slice(0, 120)}...
                </p>
                <button
                  className="btn btn-dark p-2"
                  onClick={() => {
                    handleNewsCard(newsVal);
                  }}
                >
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-3 w-100 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-dark p-3 font-monospace fs-5"
            onClick={addMore}
            disabled={isLoadMore}
          >
            Page {page + 1} <i className="bi bi-caret-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
