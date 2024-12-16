import { AuthContext } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Link, useRouter } from "@tanstack/react-router";
import { BackpackIcon, MenuIcon, UserCircle2Icon, XIcon } from "lucide-react";
import { useContext } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { ListItem } from "./ui/ListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <nav className=" py-4  border-b-neutral-200 border-b">
      <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-end">
          <BackpackIcon className="w-10 h-10 text-red-500" />
          <h1 className="text-xl font-black text-left ml-2.5 text-red-500 leading-4">
            WEBBEN <br />
            <span className=" text-xs font-medium text-neutral-800 leading-1">
              Benjamarachutit
            </span>
          </h1>
        </div>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
    </nav>
  );
}

export function DesktopNav() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = async () => {
    await logout();
    router.invalidate();
  };

  return (
    <div className="list-none hidden sm:flex">
      <NavigationMenu>
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              หน้าแรก
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>ผลงาน</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] list-none">
                <ListItem title="ผลงานวิชาการ" href="/award">
                  ผลงานด้านวิชาการ การเรียนดี ฝีมือเก่ง
                </ListItem>
                <ListItem title="ผลงานกีฬา" href="/award">
                  ผลงานด้านกีฬา กีฬาเยี่ยม
                </ListItem>
                <ListItem title="Portfolio" href="/portfolio">
                  Portfolio ของศิษย์เก่า
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuItem className="mr-2">
          <Link to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              เกี่ยวกับ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {isAuthenticated ? (
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <UserCircle2Icon className="w-6 h-6" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] list-none">
                  <ListItem title="โปรไฟล์ของฉัน" href="/profile">
                    ดูโปรไฟล์ของฉัน
                  </ListItem>
                </ul>
                <Button onClick={handleSignOut} className="m-2.5">
                  ออกจากระบบ
                </Button>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        ) : (
          <>
            <NavigationMenuItem>
              <Link to="/auth/signUp">
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "border")}
                >
                  สร้างบัญชี
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-2">
              <Link to="/auth/signIn">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-red-600 text-white"
                  )}
                >
                  เข้าสู่ระบบ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenu>
    </div>
  );
}

export function MobileNav() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outline">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex justify-between items-center">
            <div className="flex">
              <BackpackIcon className="w-10 h-10 text-red-500" />
              <h1 className="text-xl font-black text-left ml-2.5 text-red-500 leading-5">
                <span className=" text-xs font-medium text-neutral-800">
                  Benjamarachutit
                </span>
                <br /> Showcase
              </h1>
            </div>
            <DrawerClose className="border aspect-square h-full flex items-center justify-center rounded-md">
              <XIcon className="w-6 h-6" />
            </DrawerClose>
          </div>
        </DrawerHeader>
        <ul className="p-5">
          <li>
            <Link to="/">หน้าแรก</Link>
          </li>
          <li>
            <Link to="/award">ผลงาน</Link>
          </li>
          <ul>
            <li>
              <Link to="/award">ผลงานวิชาการ</Link>
            </li>
            <li>
              <Link to="/award">ผลงานกีฬา</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
          <li>
            <Link to="/about">เกี่ยวกับ</Link>
          </li>
        </ul>
        <DrawerFooter>
          {!isAuthenticated ? (
            <div className="grid grid-cols-2 gap-x-2">
              <Button variant="outline" className="w-full">
                สร้างบัญชี
              </Button>
              <Button className="w-full">เข้าสู่ระบบ</Button>
            </div>
          ) : (
            <Link to="/profile">
              <Button className="w-full flex items-center">
                {" "}
                <UserCircle2Icon className="w-6 h-6" /> โปรไฟล์
              </Button>
            </Link>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
