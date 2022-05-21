import "styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "components/common/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="py-4 flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
