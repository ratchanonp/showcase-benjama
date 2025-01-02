import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import AddPortfolioForm from "./AddPortfolioForm";
import { AddPortfolioDialogContext } from "./context/AddPortfolioDialogContext";

export default function AddPortfolioDialog() {
  const [open, setOpen] = useState(false);

  return (
    <AddPortfolioDialogContext.Provider value={{ open, setOpen }}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button>เพิ่ม Portfolio </Button>
        </DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-[calc(100vh-100px)]">
          <DialogHeader>
            <DialogTitle>เพิ่ม Portfolio </DialogTitle>
            <DialogDescription>
              กรุณากรอกรายละเอียด Portfolio ที่คุณต้องการจะร่วมแบ่งปัน
            </DialogDescription>
          </DialogHeader>
          <AddPortfolioForm />
        </DialogContent>
      </Dialog>
    </AddPortfolioDialogContext.Provider>
  );
}
