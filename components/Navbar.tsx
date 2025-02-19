'use client';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; // Import useState

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="shadow-md fixed w-full top-0 z-50 border-b border-border bg-background">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                <Link href="/" aria-label="Go to Home page" className="flex items-center">
                    <Image
                        src="/logo.jpeg"
                        alt="Logo Foodie"
                        width={100}
                        height={50}
                        className="object-contain mr-2"
                        priority
                    />
                    <span className="font-bold text-xl text-foreground hidden md:block">Foodie</span>
                </Link>

                {/* Hamburger Menu (Mobile) */}
                <button
                    className="md:hidden text-foreground focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label="Open mobile menu"
                >
                    {/* Replace with an actual hamburger icon (e.g., using heroicons) */}
                    ☰
                </button>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className={cn("text-primary hover:text-primary/80")} aria-label="Home">Home</Link>
                    <Link href="/about" className={cn("text-primary hover:text-primary/80")} aria-label="About">About</Link>
                    <Link href="/contact" className={cn("text-primary hover:text-primary/80")} aria-label="Contact">Contact</Link>
                    {/* Optional: Add a call-to-action button */}
                    {/* <Button size="sm" variant="outline">Get Started</Button> */}
                </div>

                {/* Mobile Menu (Conditionally Rendered) */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md p-4">
                        <Link href="/" className={cn("block text-primary hover:text-primary/80 py-2")} aria-label="Home">Home</Link>
                        <Link href="/about" className={cn("block text-primary hover:text-primary/80 py-2")} aria-label="About">About</Link>
                        <Link href="/contact" className={cn("block text-primary hover:text-primary/80 py-2")} aria-label="Contact">Contact</Link>
                        {/* Optional: Add a call-to-action button */}
                        {/* <Button size="sm" variant="outline" className="w-full">Get Started</Button> */}
                    </div>
                )}
            </div>
        </nav>
    );
}