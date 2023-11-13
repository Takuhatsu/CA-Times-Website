import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ArticleCardConstructor from "../ArticleCard/ArticleCardConstructor";
import featuredArticles from "./featuredArticles.json";
import allArticles from "./allArticles.json";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("featured");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Get the articles based on the selected category
  const getArticles = () => {
    return selectedCategory === "featured" ? featuredArticles : allArticles;
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="featuredAndAllArticles">
          <Link to="/" onClick={() => handleCategoryChange("featured")}>
            <div
              className={`featuredArticles ${
                selectedCategory === "featured" ? "active" : ""
              }`}
            >
              Featured
            </div>
          </Link>
          <Link to="/" onClick={() => handleCategoryChange("all")}>
            <div
              className={`allArticles ${
                selectedCategory === "all" ? "active" : ""
              }`}
            >
              All articles
            </div>
          </Link>
        </div>

        {/* Render the articles dynamically */}
        {getArticles().map((article) => (
          <ArticleCardConstructor
            key={article.id} // Add the key prop with a unique identifier (in this case, index)
            {...article}
            userImage={`/Articles/${article.userImage}`}
            articleCoverImage={`/Articles/${article.articleCoverImage}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
