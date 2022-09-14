import "./singlePost.css";
import React from "react";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1663059548792-b77bc8baf9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />

        <h1 className="singlePostTitle">
          기사 제목
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>safak</b>
          </span>

          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          [의학신문·일간보사=정우용 기자] 코로나19의 감염을 저해하는 분자가
          발견됐다. 일본 산업기술종합연구소와 나가사키대 등 공동연구팀은
          비늘버섯 유래 당쇄결합 펩티드가 코로나19의 감염열쇠인
          '스파이크단백질'의 당쇄와 아미노산을 동시에 인식해 작용하고 기존
          바이러스와 오미크론 변이바이러스의 감염을 방해하는 것으로 확인했다고
          발표했다. 다양한 코로나19 변이바이러스에 효과를 나타내는 진단약과
          치료제 개발에 도움을 주는 연구성과로 주목된다. 연구팀은 당쇄를
          인식하는 단백질의 특이성과 결합강도 해석시스템을 개발하고 이를 활용한
          결과, 비늘버섯 유래 당쇄결합 펩티드가 코로나19의 스파이크단백질과
          결합하는 것으로 확인했다. 세포실험과 과학계산 결과, 이 펩티드가
          스파이크단백질의 당쇄와 아미노산에 결합·응집해 코로나19의 감염을
          저해하고 있었다. 또 기존 바이러스와 오미크론 변이바이러스와도 활성을
          나타내는 것으로 확인됐다 코로나19는 백신 접종으로 중증화가 억제되고
          있지만 바이러스 변이에 따라 백신과 항체약이 효과를 보이지 않는 예가
          늘고 있어 변이바이러스에도 효과적인 치료제 등 개발이 요구되고 있다.
        </p>
      </div>
    </div>
  );
}
