import { Providers } from "components/Providers"
import { globalStyles } from "lib/theme"

function Portfolio({ Component, pageProps }) {
    globalStyles()
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    )
}


export default Portfolio