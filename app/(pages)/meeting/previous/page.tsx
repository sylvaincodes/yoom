import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Meeting } from "@/components/wrappers/meeting/meeting";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";

export default function Page() {
  return (
    <section className="pt-[100px] bg-dark-1 flex-1 text-white min-h-50">
      <Container>
        <Heading title="Réunions terminées" />
        <Meeting show={6} type="ended" />
      </Container>
    </section>
  );
}

export const metadata: Metadata = {
  title: "YOOM - Réunions terminées",
  description: "Application d'appel vidéo",
  icons: {
    icon: "/logo/logo.svg",
  },

  openGraph: mergeOpenGraph({
    title: "YOOM - Réunions passées",
    url: '/meeting/previous',
  }),
};
