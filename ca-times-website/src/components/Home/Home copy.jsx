import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ArticleCard_1 from "../ArticleCardsOnHomePage/ArticleCard_1/ArticleCard_1";
import ArticleCard_2 from "../ArticleCardsOnHomePage/ArticleCard_2/ArticleCard_2";
import ArticleCard_3 from "../ArticleCardsOnHomePage/ArticleCard_3/ArticleCard_3";

const NonDraggableLink = ({ to, children, onClick }) => (
  <Link draggable="false" to={to} onClick={onClick}>
    {children}
  </Link>
);

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("featured");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="featuredAndAllArticles">
          <NonDraggableLink to="/" onClick={() => handleCategoryChange("featured")}>
            <div className={`featuredArticles ${selectedCategory === "featured" ? "active" : ""}`}>
              Featured articles
            </div>
          </NonDraggableLink>
          <NonDraggableLink to="/" onClick={() => handleCategoryChange("all")}>
            <div className={`allArticles ${selectedCategory === "all" ? "active" : ""}`}>
              All articles
            </div>
          </NonDraggableLink>
        </div>
        {selectedCategory === "featured" && (
          <>
            <NonDraggableLink to="/login">
              <ArticleCard_1 />
            </NonDraggableLink>
            <ArticleCard_2 />
          </>
        )}
        {selectedCategory === "all" && (
          <>
            <NonDraggableLink to="/">
              <ArticleCard_3 />
            </NonDraggableLink>
            <NonDraggableLink to="/login">
              <ArticleCard_1 />
            </NonDraggableLink>
            {/* Add other ArticleCard components for "All articles" as needed */}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;