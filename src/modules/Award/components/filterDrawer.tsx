import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Settings2Icon } from "lucide-react";
import FilterForm from "./filterForm";

export default function FilterDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outline">
          <Settings2Icon />
          ตัวกรอง & จัดเรียง
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <p className="flex items-center">
              <Settings2Icon className="mr-2" />
              ตัวกรอง & จัดเรียง
            </p>
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-5 pb-5">
          <FilterForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
