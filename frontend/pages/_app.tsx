import Sidebar from "components/common/Sidebar";
import "styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="pt-4 flex-1">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </main>
    </div>
  );
}

export default MyApp;
