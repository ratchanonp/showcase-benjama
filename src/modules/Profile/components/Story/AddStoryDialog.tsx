import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddStoryDialogContext } from "@/modules/Profile/components/Story/contexts/AddStoryDialogContext";
import { useState } from "react";
import AddStoryForm from "./AddStoryForm";

export default function AddStoryDialog() {
  const [open, setOpen] = useState(false);

  return (
    <AddStoryDialogContext.Provider value={{ open, setOpen }}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button>เพิ่มเรื่องราว</Button>
        </DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-[calc(100vh-100px)]">
          <DialogHeader>
            <DialogTitle>เพิ่มเรื่องราว</DialogTitle>
            <DialogDescription>
              กรุณากรอกรายละเอียดเรื่องราวที่คุณต้องการจะร่วมแบ่งปัน
            </DialogDescription>
          </DialogHeader>
          <AddStoryForm />
        </DialogContent>
      </Dialog>
    </AddStoryDialogContext.Provider>
  );
}
