import React from "react";
import ArticleCardConstructor from "../../ArticleCard/ArticleCardConstructor";
import artImage from "./playwell_teaser_sm.png";
import userImage from "./F8TEudZWAAAc7s8.jpg";

function ArticleCard_2() {
  return (
    <div className="App">
      <div className="mainContainer">
        <ArticleCardConstructor
          userIamge={userImage}
          nickname="Yarn NPM"
          isVerified={false}
          articleDate="Oct 15"
          articleCoverImage={artImage}
          tag="Games"
          likes={454}
          comments={121}
          bookmarks={22}
          timeToRead="25 min read"
          title="How I store my old Lego?"
          shortDesc="Today I want to dive into one of the solutions we love: an easy way to sort and store LEGO sets."
        />
      </div>
    </div>
  );
}

export default ArticleCard_2;
