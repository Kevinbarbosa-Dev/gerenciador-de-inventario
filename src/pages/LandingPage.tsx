import FooterLand from "../components/landingPage/FooterLand";
import HeaderLand from "../components/landingPage/HeaderLand";
import MainInfo from "../components/landingPage/MainInfo";
import MainPlans from "../components/landingPage/MainPlans";


export default function LandingPage() {
  return (
    <div className="custom-scrollbar h-screen overflow-y-auto bg-[#262626] text-white">
      <HeaderLand />
      <main className="flex-1">
        <MainInfo />
        <MainPlans />
      </main>
      <FooterLand />
    </div>
  );
}