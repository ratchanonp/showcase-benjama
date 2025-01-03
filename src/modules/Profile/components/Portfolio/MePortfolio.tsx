import { Skeleton } from "@/components/ui/skeleton";
import { AuthContext } from "@/contexts/AuthContext";
import { useGetPortfolioByAuthorIdQuery } from "@/features/portfolio/portfolioSlice";
import PortfolioCard from "@/modules/Portfolio/components/PortfolioCard";
import { useContext } from "react";

export default function MePortfolio() {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetPortfolioByAuthorIdQuery(user?.uid ?? "");

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {[...Array(4)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
      {data?.map((portfolio) => (
        <PortfolioCard key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
}
