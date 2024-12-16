import AwardCard from "@/components/awardCard";
import { AuthContext } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Award } from "../addAwardPage";

export default function OwnAward() {
  const { user } = useContext(AuthContext);
  const [award, setAward] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.uid) {
        setLoading(true);
        const awardsRef = collection(db, "awards");
        const q = query(awardsRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const awardsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAward(awardsData as Award[]);
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.uid]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {award.map((award) => (
            <AwardCard {...award} key={award.id} />
          ))}
        </div>
      )}
    </div>
  );
}
