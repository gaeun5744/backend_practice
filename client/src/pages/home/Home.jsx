import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sdiebar from "../../components/sidebar/Sidebar";
import "./home.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sdiebar />
      </div>
    </>
  );
}
