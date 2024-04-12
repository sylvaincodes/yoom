import { HeaderOne } from "@/components/wrappers/header/header-one";
import { SidebarOne } from "@/components/wrappers/sidebar/sidebar-one";
import { auth } from '@clerk/nextjs'
import { redirect } from "next/navigation";
import { Providers } from "@/providers";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <Providers>
      <HeaderOne />
      <main className="flex h-screen">
        <SidebarOne className="hidden lg:block" />
        {children}
      </main>
    </Providers>

  );
}
