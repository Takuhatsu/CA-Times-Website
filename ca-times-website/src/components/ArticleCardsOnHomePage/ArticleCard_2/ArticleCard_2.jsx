import React from "react";
import ArticleCardConstructor from "../../ArticleCard/ArticleCardConstructor";
import artImage from "./gta3.png";
import userImage from "./3Av.png";

function ArticleCard_2() {
  return (
    <div className="App">
      <div className="mainContainer">
        <ArticleCardConstructor
          userIamge={userImage}
          nickname="Jaw3d"
          isVerified={false}
          articleDate="Oct 27"
          articleCoverImage={artImage}
          tag="Games"
          likes={23}
          comments={12}
          bookmarks={2}
          timeToRead="5 min read"
          title="Why GTA III is soo cool?"
          shortDesc="Grand Theft Auto III is a 2001 action-adventure game developed by DMA Design and published by Rockstar Games. It is the third main entry in the Grand Theft Auto series, following 1999's Grand Theft Auto 2, and the fifth instalment overall."
        />
      </div>
    </div>
  );
}

export default ArticleCard_2;
