import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav>
      <ul className="flex gap-8">
        <Link href={"/"}>
          <li>Product</li>
        </Link>
        <Link href={"/pricing"}>
          <li>Pricing</li>
        </Link>
        <Link href={"/"}>
          <li>Resources</li>
        </Link>
      </ul>
    </nav>
  );
}
