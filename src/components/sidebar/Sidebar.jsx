import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import "./sidebar.css";
import Starrating from "../starRating/Starrating";

const Sidebar = ({
  categories,
  selectedCategories,
  onCategoryChange,
  min,
  max,
  setMin,
  setMax,
  clearCategories,
  setSelectedRating,
}) => {
  const [categoriesExpand, setCategoriesExpand] = useState(true);
  const [pricesExpand, setPricesExpand] = useState(true);

  const handleCheckboxChange = (category) => {
    const updateCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    onCategoryChange(updateCategories);
  };

  console.log(categories);

  return (
    <div className="sidebar">
      <div className="sidebar__categories">
        <div className="sidebar__categories--top">
          <h4>All Categories</h4>
          <span>
            {categoriesExpand ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          </span>
        </div>
        <div className="sidebar__categories--bottom">
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      <hr style={{ margin: "10px" }} />
      <div className="sidebar__prices">
        <div className="sidebar__prices--top">
          <h4>Prices</h4>
          <span>
            {pricesExpand ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          </span>
        </div>
        <div className="sidebar__prices--bottom">
          <div className="sidebar__prices--bottom_ranges">
            <p>$0-$100</p>
            <p>$100-$200</p>
            <p>$200-$300</p>
            <p>$300-$500</p>
            <p>$500-$1000</p>
          </div>
          <div className="sidebar__prices--bottom_inputs">
            <input
              type="number"
              placeholder="$min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
            <p>-</p>
            <input
              type="number"
              placeholder="$max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>
      </div>
      <hr style={{ margin: "10px" }} />
      <div className="sidebar__rating">
        <span className="sidebar__rating--text">Rating</span>
        <div className="ratings-filter">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} onClick={() => setSelectedRating(star)}>
              <Starrating noOfStars={star} />
            </div>
          ))}
        </div>
      </div>

      <button className="clearBtn" onClick={clearCategories}>
        Clear filters
      </button>
    </div>
  );
};

export default Sidebar;
