import AwardCard from "@/components/awardCard";
import { db } from "@/lib/firebase";
import { Award } from "@/modules/Profile/addAwardPage";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function AwardGrid() {
  const [award, setAward] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collection(db, "awards");
      const docSnapshot = await getDocs(docRef);
      const awardsData = docSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAward(awardsData as Award[]);
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
        <AwardCard {...award} key={award.id} />
      ))}
    </div>
  );
}
