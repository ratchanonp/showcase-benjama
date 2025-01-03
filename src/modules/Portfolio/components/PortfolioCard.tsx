import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AuthContext } from "@/contexts/AuthContext";
import { useDeletePortfolioMutation } from "@/features/portfolio/portfolioSlice";
import { IPortfolio } from "@/interfaces/portfolio.interface";
import { PopoverClose } from "@radix-ui/react-popover";
import { DownloadIcon, Trash2Icon } from "lucide-react";
import { useContext, useMemo } from "react";

interface Props {
  portfolio: IPortfolio;
}

export default function PortfolioCard(props: Props) {
  const { portfolio } = props;
  const { user } = useContext(AuthContext);
  const {
    producer,
    coverImage,
    department,
    faculty,
    university,
    year,
    authorId,
    pdf,
  } = portfolio;

  const isOwner = useMemo(() => {
    if (!user) return false;
    return user.uid === authorId;
  }, [user, authorId]);

  const [deletePortfolio] = useDeletePortfolioMutation();

  async function handleDelete() {
    await deletePortfolio(portfolio.id);
  }

  return (
    <div className="bg-white rounded-lg">
      <img
        src={coverImage}
        alt={producer}
        className="w-full aspect-[2/3] object-cover rounded-t-lg"
      />
      <div className="p-4 space-y-2">
        <h2>{producer}</h2>
        <div>
          <p className="text-xs text-neutral-400">{department}</p>
          <p className="text-xs text-neutral-400">{faculty}</p>

          <p className="text-xs text-neutral-400">{university}</p>
        </div>
        <p className="text-xs text-neutral-600">TCAS {year}</p>
        <a
          href={pdf}
          download={producer}
          target="_blank"
          className="w-full bg-neutral-900 text-white rounded-lg flex justify-center items-center text-center text-sm py-2 space-x-2"
        >
          <DownloadIcon size={16} />
          <span>ดาวน์โหลด</span>
        </a>
        {isOwner && (
          <Popover>
            <PopoverTrigger>
              <Button variant="destructive" size="sm" className="w-full">
                <Trash2Icon size={16} /> Delete
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <p className="text-sm">
                  คุณแน่ใจหรือว่าต้องการลบ Portfolio นี้?
                </p>
                <div className="flex justify-end space-x-2">
                  <PopoverClose asChild>
                    <Button variant="secondary" size="sm">
                      ยกเลิก
                    </Button>
                  </PopoverClose>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleDelete}
                  >
                    ลบ
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
}
