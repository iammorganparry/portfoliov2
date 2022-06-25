import { createTheme, globalCss } from "@nextui-org/react"

export const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {}, // optional
    }
})

export const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {

        }, // optional
    }
})

export const globalStyles = globalCss({
    body: {
        /* Enable GPU Rendering */
        transform: 'translateZ(0)',
    }
})
