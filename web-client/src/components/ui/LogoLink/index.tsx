"use client";

import Link from "next/link";
import Image from "next/image";

export default function LogoLink() {
  return (
    <Link href="/" aria-label="Finder Home">
      <Image
        src="/logo.svg"
        alt="Finder Logo"
        width={116}
        height={34}
      />
    </Link>
  );
}