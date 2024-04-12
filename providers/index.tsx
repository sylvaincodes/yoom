import React, { Fragment } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import { Theme } from '@radix-ui/themes';
import {Toaster} from 'react-hot-toast'
import { StreamVideoProvider } from "./streamapi";
export const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <Fragment>
        <ClerkProvider appearance={{
          
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/logo/logo.svg",
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
        {/* <Theme> */}
             <StreamVideoProvider>
              <Toaster />
                {children}
              </StreamVideoProvider>
        {/* </Theme> */}
        </ClerkProvider>
    </Fragment>

  )
}
