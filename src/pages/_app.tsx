import "@/styles/globals.css";
import { MagicAuthConnector } from "@magiclabs/wagmi-connector";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MagicAuthConnector({
      chains,
      options: {
        apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY as string,
        isDarkMode: true,
        /* Make sure to enable OAuth options from magic dashboard */
        oauthOptions: {
          providers: ["google", "facebook", "twitter", "discord"],
        },
        magicSdkConfiguration: {
          network: {
            rpcUrl: "https://rpc.ankr.com/eth",
            chainId: 1,
          },
        },
      },
    }),
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
