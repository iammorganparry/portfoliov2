import { Providers } from "components/Providers"

function Portfolio({ Component, pageProps }) {
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    )
}


export default Portfolio