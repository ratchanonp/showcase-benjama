import { Skeleton } from "@/components/ui/skeleton";
import { useGetPortfolioQuery } from "@/features/portfolio/portfolioSlice";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid() {
  const { data, isLoading } = useGetPortfolioQuery();

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
