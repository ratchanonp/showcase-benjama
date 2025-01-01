import PortfolioCard from "@/components/portfolioCard";
import { db } from "@/lib/firebase";
import { Portfolio } from "@/modules/Profile/addPortfolioPage";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function PortfolioGrid() {
  const [award, setPortfolio] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collection(db, "portfolio");
      const docSnapshot = await getDocs(docRef);
      const awardsData = docSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPortfolio(awardsData as Portfolio[]);
      setLoading(false);
    };

    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (award.length === 0) {
    return <p>ไม่มีข้อมูล</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {award.map((award) => (
        <PortfolioCard {...award} key={award.id} />
      ))}
    </div>
  );
}
