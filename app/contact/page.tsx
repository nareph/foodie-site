// src/app/contact/page.tsx (assuming you're using the app directory)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
    return (
        <div className="flex flex-col items-center p-8 min-h-screen bg-background">
            <div className="container max-w-2xl">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-center">Contactez-nous</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <p className="text-muted-foreground text-center">
                            Pour toute question ou commande, n&apos;hésitez pas à nous contacter :
                        </p>
                        <ul className="text-lg text-muted-foreground">
                            <li>📞 Téléphone : +237 694 97 55 35</li>
                            <li>📧 Email : foodie668@gmail.com</li>
                            <li>📍 Adresse : Acacia, Yaoundé, Cameroun</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}