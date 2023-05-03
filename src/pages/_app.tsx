import "@/styles/globals.css";
import { MagicAuthConnector } from "@everipedia/wagmi-magic-connector";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createClient, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
	[mainnet],
	[publicProvider()],
);

const client = createClient({
	autoConnect: true,
	provider,
	webSocketProvider,
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
		<WagmiConfig client={client}>
			<Component {...pageProps} />
		</WagmiConfig>
	);
}
