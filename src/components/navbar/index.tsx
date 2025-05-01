"use client";

import { bodo } from "@/lib/fonts";
import Star8 from "../stars/star8";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex flex-col sm:flex-row items-center justify-between h-fit sm:px-16 gap-2 sm:gap-4 w-full mx-auto border-b-3 border-black/25 pb-4">
			<h1 className={`text-4xl md:text-6xl font-bold italic ${bodo.className} neobrutal-secondary select-none cursor-pointer  hover:scale-110`}>
				EMBRACE SOUL
			</h1>
			<Link href="/" className=" neobrutal px-2 sm:px-4 sm:py-2 select-none cursor-pointer hover:scale-110">
				<div className={`flex gap-2 items-center `}>
					<h1 className=" text-2xl md:text-4xl font-black">棄順</h1>
					<Star8 size={32} />
					<h1 className=" text-2xl md:text-4xl font-black">慈心</h1>
				</div>

			</Link>

		</nav>
	);
}