import React, { useState, useMemo, useRef } from "react";

import TMDBLogo from "../../assets/TMDBLogo.svg";
import "./Navbar.css";
import PlusIcon from "../../assets/PlusIcon.svg";
import SeachIcon from "../../assets/SearchIcon.svg";
import DefaultImage from "../../assets/DefaultImage.svg";

function Navbar() {
  const navbarLists = ["Movies", "TV Shows", "people", "More"];

  const [isClicked, setIsClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  const filteredItems = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(lowerSearch));
  }, [searchTerm]);

  return (
    <>
      <div className="navbar px-4 py-2">
        <div className="left-navbar d-flex align-items-center">
          <a href="#">
            <img src={TMDBLogo} alt="TMDB Logo" />
          </a>

          <ul className="list-unstyled d-flex mb-0 px-4 ">
            {navbarLists.map((navbarList, index) => (
              <li key={index} className="me-3">
                <a href="#" className="nav-link text-white fw-bold">
                  {navbarList}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-navbar">
          <ul className="right-ul d-flex align-items-center justify-content-center list-unstyled">
            <li className="nav-link">
              <a href="#">
                <img src={PlusIcon} alt={DefaultImage} />
              </a>
            </li>
            <li>
              <span>EN</span>
            </li>
            <li className="nav-link">
              <a href="#">Login</a>
            </li>
            <li className="nav-link">
              <a href="#">Join TMDB</a>
            </li>
            <li className="navlink">
              <a href="#">
                <img src={SeachIcon} alt={DefaultImage} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-5">
        <div
          className="position-relative"
          onBlur={() => setTimeout(() => setIsClicked(false), 100)}
        >
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Search for a movie, tv show, person..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsClicked(true)}
          />

          <ul className={isClicked ? "list-group mt-2" : "d-none"}>
            {(searchTerm ? filteredItems : items).map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
