"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/navbar";
import { Avatar } from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MenuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/about-us",
  },
  {
    name: "Explore lessons",
    path: "/lessons",
  },

  {
    name: "Contact Us",
    path: "/contact",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  


  return (
    <div>
      <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            className="sm:hidden"
            aria-label={isMenuOpen ? "close menu" : "open menu"}
          ></NavbarMenuToggle>
          <NavbarBrand>
            <Image src="/logo.svg" width={40} height={40} alt="logo" />
            <h2 className="md:font-bold text-2xl text-primary ml-5">Shulea</h2>
          </NavbarBrand>
          <NavbarContent justify="center" className="hidden sm:flex">
            {MenuItems.map((item, index) => (
              <NavbarItem
                key={index}
                className=" tet-xl mx-3 text-primary font-medium hover:underline"
              >
                <Link href={item.path}>{item.name}</Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end">
            <SignedIn>
            <Link href={"/learner/dashboard"}>
              <Button color="primary">
                Dashboard
              </Button>
            </Link>
            <UserButton />
              
            </SignedIn>
            <SignedOut>
              <Link href={"/sign-in"}>
                <Button color="primary">Get started</Button>
              </Link>
            </SignedOut>
          </NavbarContent>
        </NavbarContent>
        <NavbarMenu>
          {MenuItems.map((item, index) => (
            <NavbarItem
              key={index}
              className=" tet-xl mx-3 text-primary font-medium hover:underline"
            >
              <Link href={item.path}>{item.name}</Link>
            </NavbarItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default Header;
