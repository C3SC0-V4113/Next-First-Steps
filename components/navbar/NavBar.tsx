import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/pricing", text: "Pricing" },
];

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center gap-1">
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <Link key={navItem.path} className="mr-2" href={navItem.path}>
          {navItem.text}
        </Link>
      ))}
    </nav>
  );
};