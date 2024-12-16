import { Award } from "@/modules/Profile/addAwardPage";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

export default function AwardCard(award: Award) {
  const {
    certificateImage,
    awardName,
    awardType,
    competitionName,
    eventName,
    studentFullName,
  } = award;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          className="overflow-hidden"
          src={certificateImage}
          alt={competitionName}
        />
      </CardHeader>
      <CardContent className="p-5">
        <p>{awardName}</p>
        <p>{awardType}</p>
        <h3 className="text-xl">{competitionName}</h3>
        <p>{eventName}</p>
      </CardContent>
      <Separator />
      <CardFooter className="p-5">
        <p>{studentFullName}</p>
      </CardFooter>
    </Card>
  );
}
