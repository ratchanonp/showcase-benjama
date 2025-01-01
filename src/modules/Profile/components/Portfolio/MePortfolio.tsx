import PortfolioCard from "@/modules/Portfolio/components/PortfolioCard";


export default function MePortfolio() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
      <PortfolioCard />
    </div>
  );
}