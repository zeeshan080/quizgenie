import React from "react";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="py-4 px-6 flex justify-between items-center bg-white shadow-md">
      <div className="text-lg font-bold">
        <Link href={"/"}>QuizGenie</Link>
      </div>

      <Navbar />

      <div className="flex gap-2">
        <Button variant={"default"} asChild><Link href={"/sign-up"}>Sign Up Free</Link></Button>
        <Button variant={"ghost"} asChild><Link href={"/login"}>Login</Link></Button>
      </div>
    </header>
  );
}
