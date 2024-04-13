import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Meeting } from "@/components/wrappers/meeting/meeting";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";

export default function Page() {
  return (
    <section className="pt-24 bg-dark-1 flex-1 text-white min-h-screen">
        <Container>
           <Heading title="Réunions prévues"/>
           <Meeting show={6} type="upcoming" />
        </Container>
    </section>
  );
}

export const metadata: Metadata = {
  title: "YOOM - Réunions programmées",
  description: "Application d'appel vidéo",
  icons: {
    icon: "/logo/logo.svg",
  },

  openGraph: mergeOpenGraph({
    title: "YOOM - Réunions programmées",
    url: '/meeting/upcoming',
  }),
};
