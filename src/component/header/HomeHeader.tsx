import Logo from "../../assets/images/mobile_logo.png";
import Burger from "../../assets/images/hamburger_logo.png";
export default function HomeHeader() {
  return (
    <div className="relative z-40 flex justify-between mx-5 py-[12%]">
      <img className="h-[36px] w-[84px]" src={Logo} alt="logo" />
      <img className="h-[12px] w-[23px]" src={Burger} alt="logo" />
    </div>
  );
}
