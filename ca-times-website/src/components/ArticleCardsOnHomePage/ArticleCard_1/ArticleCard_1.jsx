import React from "react";
import ArticleCardConstructor from "../../ArticleCard/ArticleCardConstructor";
import artImage from "./l8ercr2ewi661.jpg";
import userImage from "./AB1.png";

function ArticleCard_1() {
  return (
    <div className="App">
      <div className="mainContainer">
        <ArticleCardConstructor
          userIamge={userImage}
          nickname="Takuhatsu"
          isVerified={true}
          articleDate="Oct 26"
          articleCoverImage={artImage}
          tag="NFT"
          likes={102}
          comments={99}
          bookmarks={6}
          timeToRead="10 min read"
          title="What is NFT, REALLY?"
          shortDesc=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    Hjhfsjhksdfk sdfjhsdjfhkjhsdf wruioweiouower iouweoirw oiuowieruoiuwe oiuwoeiru oiuwerwoiu woiuwer
    weruiouower oiuwerwe ooiuowerwer ouoiuewrwer oiuoier uiouwoiuoiuoiwuierueroiweoiruwoieru wiouwoierw
    oiwurowiuroiwurioweioruow woiuwoieurwoieurlkjfslkdjf welrjwlrjwerbnwmebrnmb werb'
    "
        />
      </div>
    </div>
  );
}

export default ArticleCard_1;
