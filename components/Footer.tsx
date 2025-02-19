import { cn } from "@/lib/utils";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground p-4 mt-auto border-t border-border">
            <div className="container mx-auto flex justify-between items-center">
                <p>© 2025 Foodie. Tous droits réservés.</p>
                <div className="flex space-x-4">
                    <Link
                        href="https://facebook.com/profile.php?id=61567492385723&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("text-primary hover:text-primary/80")}
                    >
                        Facebook
                    </Link>
                    <Link
                        href="https://instagram.com/foodie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("text-primary hover:text-primary/80")}
                    >
                        Instagram
                    </Link>
                </div>
            </div>
        </footer>
    );
}