import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { FC } from "react";
import { darkTheme, lightTheme } from "lib/theme";

export const Providers: FC = ({ children }) => {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </NextThemesProvider>
    )
}

