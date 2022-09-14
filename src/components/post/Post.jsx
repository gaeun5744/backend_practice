import React from "react";

import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1663059548792-b77bc8baf9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">포스트 제목</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        일본 산업기술종합연구소와 나가사키대 등 공동연구팀은 비늘버섯 유래
        당쇄결합 펩티드가 코로나19의 감염열쇠인 '스파이크단백질'의 당쇄와
        아미노산을 동시에 인식해 작용하고 기존 바이러스와 오미크론
        변이바이러스의 감염을 방해하는 것으로 확인했다고 발표했다. 다양한
        코로나19 변이바이러스에 효과를 나타내는 진단약과 치료제 개발에 도움을
        주는 연구성과로 주목된다. 연구팀은 당쇄를 인식하는 단백질의 특이성과
        결합강도 해석시스템을 개발하고 이를 활용한 결과, 비늘버섯 유래 당쇄결합
        펩티드가 코로나19의 스파이크단백질과 결합하는 것으로 확인했다.
      </p>
    </div>
  );
}
