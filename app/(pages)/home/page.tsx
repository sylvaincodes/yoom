import { Container } from "@/components/ui/container";
import { HomeCard } from "@/components/wrappers/home/home-card";
import { MeetingActions } from "@/components/wrappers/meeting/meeting-actions";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Grid } from "@radix-ui/themes";
import { Metadata } from "next";

export default function Page() {
  return (
    <section className="py-[120px] bg-dark-1 flex-1 text-white max-h-screen">
      <Container>

        <Grid className="grid grid-rows-auto space-y-4" >
          <HomeCard />
          <MeetingActions />
        </Grid>

      </Container>
    </section>

  );
}

export const metadata: Metadata = {
  title: "YOOM - Page d'acceuil du site",
  description: "Plateforme web gratuite de conférence vidéo pour les particuliers et les entreprises.",
  icons: {
    icon: "/logo/logo.svg",
  },

  openGraph: mergeOpenGraph({
    title: 'YOOM - Page d\'acceuil du site',
    url: '/',
  }),


};
