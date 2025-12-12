import React from "react";

function Navbar({ navOpen, setNavOpen, setCategory, setPage , searchInp, setSearchInp}) {
  return (
    <>
      {navOpen && (
        <div
          className="bg-dark position-fixed text-light d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%", zIndex: "100" }}
        >
          <div className=" position-absolute start-0 top-0 w-100 d-flex justify-content-end pe-5 pt-4">
            <i
              class="bi bi-arrow-bar-left fs-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <span className="text-warning ms-2">close</span>
            </i>
          </div>
          <ul
            className="navContent list-unstyled d-flex flex-column align-items-center mt-4 font-monospace fs-1 user-select-none "
            style={{ cursor: "pointer" }}
          >
            <li
              className="mt-3 text-capitalize"
              onClick={(e) => {
                setNavOpen(false), setCategory(e.target.textContent);
                setPage(1);
              }}
            >
              business
            </li>
            <li
              className="mt-3 text-capitalize"
              onClick={(e) => {
                setNavOpen(false), setCategory(e.target.textContent);
                setPage(1);
              }}
            >
              entertainment
            </li>
            <li
              className="mt-3 text-capitalize"
              onClick={(e) => {
                setNavOpen(false), setCategory(e.target.textContent);
                setPage(1);
              }}
            >
              general
            </li>
            <li
              className="mt-3 text-capitalize"
              onClick={(e) => {
                setNavOpen(false), setCategory(e.target.textContent);
                setPage(1);
              }}
            >
              health
            </li>
            <li
              className="mt-3 text-capitalize"
              onClick={(e) => {
                setNavOpen(false), setCategory(e.target.textContent);
                setPage(1);
              }}
            >
              science
            </li>
            <li
              className="mt-3 text-capitalize"
              onClick={(e) => {
                setNavOpen(false), setCategory(e.target.textContent);
                setPage(1);
              }}
            >
              sports
            </li>
            <li
              className="mt-3 text-capitalize"
              onClick={(e) => {
                setNavOpen(false), setCategory(e.target.textContent);
                setPage(1);
              }}
            >
              technology
            </li>
          </ul>
        </div>
      )}
      <div className=" d-flex justify-content-between align-items-center pe-3 pt-2">
        <i
          className="bi bi-list fs-1 ps-4"
          onClick={() => setNavOpen(true)}
          style={{ cursor: "pointer" }}
        ></i>
        <h1
          className="font-monospace ms-lg-5 user-select-none"
          style={{ fontSize: "3.5em" }}
          onClick={()=>{setPage(1),setCategory("")}}
        >
          Daily Track
        </h1>
        <div className="input-group-lg mb-3 d-flex w-25">
          <input
            type="text"
            className="form-control form-control-lg font-monospace"
            placeholder="top headlines"
            value={searchInp}
            onChange={(e)=>setSearchInp(e.target.value)}
          />
          <span className="input-group-text fs-4">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
