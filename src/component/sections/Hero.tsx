
import Hero_Img from "../../assets/images/hero_image.png";
function Hero() {
  return (
    <div className="hero_bg ">
      <img
        className="absolute w-[286px] h-[465px] top-0 left-0 z-10"
        src={Hero_Img}
        alt="woods"
      />
      <div className="relative z-30 bg-[#1E0C06] w-[80%] h-[280px] rounded-tl-[14px] rounded-bl-[14px] float-right">
        <p className="text-white">Solid wood products</p>
      </div>
    </div>
  );
}

export default Hero;
