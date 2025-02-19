// app/page.tsx
import FlyerCarousel from '@/components/Carousel';
import { Button } from "@/components/ui/button"; // Import Shadcn UI Button component
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Découvrez Musilac : La bouillie nutritive pour toute la famille
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Une solution délicieuse et saine, riche en ingrédients naturels. Idéale pour les enfants et les adultes.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80">
              En savoir plus
            </Button>
          </div>
          <div className="lg:w-1/2">
            <FlyerCarousel className={cn("w-full max-w-2xl mx-auto")} />
          </div>
        </div>

        {/* Featured Section (Optional - Add more sections as needed) */}
        <div className="mt-16 py-8 border-t border-border">
          <h2 className="text-3xl font-semibold text-foreground mb-4 text-center">
            Pourquoi choisir Musilac?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards (Replace with actual content) */}
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-2">Ingrédients Naturels</h3>
              <p className="text-muted-foreground">
                Fabriqué avec des ingrédients de haute qualité, sans additifs artificiels.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-2">Riche en Nutriments</h3>
              <p className="text-muted-foreground">
                Fournit les vitamines et minéraux essentiels pour une alimentation équilibrée.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-2">Goût Délicieux</h3>
              <p className="text-muted-foreground">
                Une saveur irrésistible que toute la famille adorera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}