import { config } from "@/lib/wagmi.config";
import "@/styles/globals.css";
import React from "react";
import { WagmiProvider } from "wagmi";


export default function App({ children }: {
    children: React.ReactNode
}) {
  return (
    <WagmiProvider config={config}>
        {children}
    </WagmiProvider>
  );
}
