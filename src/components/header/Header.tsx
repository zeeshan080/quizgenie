import React from "react";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="py-4 px-6 flex justify-between items-center bg-gray-100 shadow-md">
      <div>Logo</div>

      <Navbar />

      <div className="flex gap-2">
        <Button variant={"default"} asChild><Link href={"/sign-up"}>Sign Up Free</Link></Button>
        <Button variant={"ghost"} asChild><Link href={"/login"}>Login</Link></Button>
      </div>
    </header>
  );
}
