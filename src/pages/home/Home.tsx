import HomeHeader from "../../component/header/HomeHeader";
import Hero from "../../component/sections/Hero";
import "./Home.css";

function Home() {
  return (
    <div className="hero-background bg-[#222021]">
      <HomeHeader />
      <Hero />
      
    </div>
  );
}

export default Home;
