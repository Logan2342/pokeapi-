import React, {ReactElement} from 'react';
import { AppProps } from "next/app";
import '../styles/globals.css';


export default function App({ Component, pageProps }: AppProps): ReactElement<AppProps> {
    return <Component {...pageProps} />
}