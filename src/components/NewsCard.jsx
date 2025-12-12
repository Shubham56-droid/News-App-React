import React from "react";

function NewsCard({ cardData, setCardData }) {
  return (
    <div
      className="bg-light d-flex flex-column"
      style={{ width: "100%", minHeight: "90vh" }}
    >
      <h1 className=" font-monospace w-75 m-auto mt-2 mb-2 bg-dark text-light p-3 rounded-4">
        {cardData.title}
      </h1>
      <div className=" d-flex mt-3 flex-column">
        <img
          className=" rounded-3 m-auto"
          src={cardData.urlToImage ? cardData.urlToImage : "newsDefaultImg.png"}
          style={{ width: "60%" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "newsDefaultImg.png";
          }}
        />
        <div className="ms-3 w-75 mt-3 align-self-center">
          <p
            className=" m-auto font-monospace fw-bold"
            style={{ fontSize: "20px" }}
          >
            Publish At - {Date(cardData.publishedAt)} <br></br> Author -
            {cardData.author ? cardData.author : "unknown source"}
          </p>
          <p className="mt-4 font-monospace fs-5">
            Description :
            {cardData.content
              ? cardData.content.slice(0, -15)
              : cardData.description}
            ...more
          </p>

          <a href={cardData.url} className="btn btn-warning btn-lg mt-3">
            Read More
          </a>
          <button
            className="btn btn-dark btn-lg mt-3 ms-3"
            onClick={() => setCardData(null)}
          >
            Close News
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
