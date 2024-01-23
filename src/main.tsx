import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
