import { ReactQueryProvider } from "@/providers/react-query-provider";
import "../app/globals.css";
import { AppProps } from "next/app";


function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default App;
