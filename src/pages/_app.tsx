import React from "react"
import { AppProps } from "next/app"
import "@atlaskit/css-reset"

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default App
