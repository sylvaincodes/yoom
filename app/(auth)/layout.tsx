import { ClerkProvider, SignedIn, auth } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider

      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
        },
        baseTheme: dark,
        variables: {
          colorPrimary: "#0E78F9",
          colorText: "white",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
      }}>

      <main className='flex justify-center items-center pt-12 bg-dark-1 h-screen'>
        {children}
      </main>

    </ClerkProvider>
  );
}
