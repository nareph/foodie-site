// src/components/WhatsAppButton.tsx
import Image from 'next/image';

export default function WhatsAppButton() {
    const phoneNumber = "694975535"; // Remplacez par le numéro WhatsApp Business
    const message = "Bonjour, je suis intéressé par la bou0llie Musilac !";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
        >
            {/* Utilisation de l'image SVG */}
            <Image
                src="/WhatsApp.svg" // Chemin relatif vers le fichier SVG dans le dossier public
                alt="WhatsApp"
                width={32} // Ajustez la largeur selon vos besoins
                height={32} // Ajustez la hauteur selon vos besoins
                className="w-8 h-8" // Classes Tailwind pour la taille
            />
        </a>
    );
}