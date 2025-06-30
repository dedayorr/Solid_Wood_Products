import Hero_Img from "../../assets/images/hero_image.png";
function Hero() {
  return (
    <div className="hero_bg ">
      <img
        className="absolute w-[286px] h-[465px] top-0 left-0 z-10"
        src={Hero_Img}
        alt="woods"
      />
      <div className="relative z-30 p-[5%] bg-[#1E0C06] w-[80%] h-[280px] rounded-tl-[14px] rounded-bl-[14px] float-right">
        <h1 className="text-white font- text-[30px] font-medium leading-[108%] tracking-wider">
          SOLID WOOD PRODUCTS
        </h1>
        <p className="text-[#FFDBBB] text-[15px]  w-[185px]">Oak, beech, ash from 1700 CZK per m3</p>
        <button className="text-white bg-[#728BAD] w-[86px] h-[21px]">Order</button>
      </div>
      
    </div>
  );
}

export default Hero;
