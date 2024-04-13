import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Meeting } from "@/components/wrappers/meeting/meeting";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";

export default function Page() {
  return (
    <section className="pt-24 bg-dark-1 flex-1 text-white min-h-screen">
        <Container>
           <Heading title="reunions enregistrées"/>
           <Meeting show={6} type="recordings" />
        </Container>
    </section>
  );
}

export const metadata: Metadata = {
  title: "YOOM - Réunions enregistrées",
  description: "Application d'appel vidéo",
  icons: {
    icon: "/logo/logo.svg",
  },
  
  openGraph: mergeOpenGraph({
    title: "YOOM - Réunions enregistées",
    url: '/meeting/previous',
  }),
};
