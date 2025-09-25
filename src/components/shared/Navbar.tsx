"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/static/nav-menu";
import Logo from "./Logo";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="max-w-7xl mx-auto sticky top-1 z-50 px-2">
            <div className="flex h-16 justify-between items-center w-full">
                {/* Logo */}
                <Logo />
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    {navLinks?.map((data) => {
                        const isActive = data.href === pathname
                        return (
                            <div key={data.id} className="flex flex-col items-center">
                                <Link href={data.href}>{data.label}</Link>
                                {isActive && (
                                    <div className="h-1 w-4 bg-[#749b3f] rounded-full mx-auto mt-1" />
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center space-x-3 lg:space-x-8 text-gray-700 font-medium">
                    <p className="flex flex-row items-center gap-1">
                        <Heart className="w-4 h-4" /> <span className="hidden md:block ">Favourites</span>
                    </p>
                    <p className="flex flex-row items-center gap-1">
                        <ShoppingCart className="w-4 h-4" /> <span className="hidden md:block ">Cart</span>
                    </p>
                    <Button bg="#FFF" className="hidden md:block w-20 border-[2px] border-black text-gray-700">
                        Sign In
                    </Button>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden flex flex-row items-center gap-2">
                    <p className="flex flex-row items-center gap-1">
                        <Heart className="w-4 h-4" />
                    </p>
                    <p className="flex flex-row items-center gap-1">
                        <ShoppingCart className="w-4 h-4" />
                    </p>
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X />
                        ) : (
                            <Menu />

                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav
                    className="
      fixed top-14 left-0 w-full
      bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium
      z-50
      animate-slideDown
    "
                >
                    <div className="flex flex-col gap-2">
                        {navLinks?.map((data) => (
                            <Link key={data.id} href={data.href}>
                                {data.label}
                            </Link>
                        ))}
                    </div>
                    <Button bg="#FFF" className="w-10 border-[2px] border-black text-gray-700">
                        Sign In
                    </Button>
                </nav>
            )}

        </header>
    );
}
