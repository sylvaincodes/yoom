import { Container } from "@/components/ui/container";
import { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Meeting } from "./components/meeting";

export default function Page({ params }: { params: { id: string } }) {

  return (
    <section className="pt-24 bg-dark-1 text-white h-screen w-screen">
      <Container>
        <Meeting id={params.id} />
      </Container>
    </section>
  );
}

export const metadata: Metadata = {
  title: "YOOM - Configuration de la réunion",
  description: "YOOM - Configuration de la réunion",
  icons: {
    icon: "/logo/logo.svg",
  },

  openGraph: mergeOpenGraph({
    title: "YOOM - Configuration de la réunion",
    url: '/',
  }),
}