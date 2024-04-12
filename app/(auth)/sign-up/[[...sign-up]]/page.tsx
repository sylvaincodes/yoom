import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "YOOM",
  description: "Application d'appel vidéo",
  icons: {
    icon: "/logo/logo.svg",
  },
};


export default function Page() {
  return <SignUp afterSignUpUrl='/home' />;
}