import { AuthContext } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Link, useRouter } from "@tanstack/react-router";
import {
  BackpackIcon,
  LogOutIcon,
  MenuIcon,
  UserCircle2Icon,
  XIcon,
} from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = async () => {
    await logout();
    router.invalidate();
  };

  return (
    <div className="list-none hidden sm:flex">
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to="/">หน้าแรก</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to="/category">ประเภท</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link
              to="/popular"
              search={{
                rankingCategory: "all",
              }}
            >
              ยอดนิยม
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-2">
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to="/about">เกี่ยวกับ</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {isAuthenticated ? (
          <NavigationMenuList>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <UserCircle2Icon className="w-6 h-6" />
                    {user?.displayName}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <UserCircle2Icon className="w-6 h-6" />
                    <Link to="/profile">โปรไฟล์</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOutIcon className="w-6 h-6" />
                    ออกจากระบบ
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
      <DrawerTrigger asChild>
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
            <Link to="/category">ประเภท</Link>
          </li>
          <li>
            <Link
              to="/popular"
              search={{
                rankingCategory: "all",
              }}
            >
              ยอดนิยม
            </Link>
          </li>
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
            <Button className="w-full flex items-center" asChild>
              <Link to="/profile">
                {" "}
                <UserCircle2Icon className="w-6 h-6" /> โปรไฟล์
              </Link>
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
