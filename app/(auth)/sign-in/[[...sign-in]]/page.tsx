import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOOM Connexion",
  description: "Application d'appel vidéo",
  icons: {
    icon: "/logo/logo.png"
  },
};

export default function Page() {
  return (
    <SignIn />
  );
}