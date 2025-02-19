// src/app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"; // Import Image component

export default function About() {
    return (
        <div className="flex flex-col items-center p-8 min-h-screen bg-background">
            <div className="container max-w-3xl"> {/* Increased max-w for more space */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-center">À propos de Foodie</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        {/* Introduction */}
                        <section className="text-muted-foreground">
                            <p className="text-lg text-center">
                                Foodie est une entreprise passionnée par la nutrition et le bien-être. Nous nous engageons à fournir des produits sains et nutritifs pour toute la famille.
                            </p>
                        </section>

                        {/* Product Highlight */}
                        <section className="text-muted-foreground">
                            <p className="text-lg text-center">
                                Notre bouillie composée <strong className="text-foreground">Musilac</strong> est le fruit de années de recherche et d&apos;innovation, conçue pour répondre aux besoins nutritionnels des enfants et des adultes.
                            </p>
                        </section>

                        {/* Image Section (Optional) */}
                        <section className="relative h-64 rounded-md overflow-hidden">
                            <Image
                                src="/about-us.jpeg" // Replace with your image
                                alt="À propos de Foodie"
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="100%"
                            />
                        </section>

                        {/* Mission Section (Example of adding more content) */}
                        <section className="text-muted-foreground">
                            <h2 className="text-xl font-semibold text-center text-foreground mb-2">Notre Mission</h2>
                            <p className="text-lg text-center">
                                Fournir des aliments sains et délicieux pour nourrir les familles et promouvoir un mode de vie sain.
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}