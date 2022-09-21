import "./sidebar.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Sdiebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">작성 기자 설명</span>
        <img
          src="https://images.unsplash.com/photo-1661347560421-a8e7b0e5a5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <p>
          부산지역 코로나19 확진자는 재유행이 시작된 지난 7월 초부터 꾸준히
          상승해 1만명대까지 올라갔다가 8월 20일부터 감소세로 돌아섰다. 지난
          6일에는 3천672명이 확진돼 평일 기준으로 7주 만에 처음으로 신규
          확진자가 3천명대로 떨어졌다.
        </p>

        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <li className="sidebarListItem">{c.name}</li>
            ))}
            <li className="sidebarListItem">Life</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
