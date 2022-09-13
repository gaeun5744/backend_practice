import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sdiebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sdiebar />
      </div>
    </>
  );
}