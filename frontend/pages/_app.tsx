import Sidebar from "components/common/Sidebar";
import "styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="flex-1">
        <QueryClientProvider client={queryClient}>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </QueryClientProvider>
      </main>
    </div>
  );
}

export default MyApp;
