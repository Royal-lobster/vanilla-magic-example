import { Inter } from "next/font/google";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { connect, connectors } = useConnect();
	const { address, isConnected } = useAccount();
	const { disconnect } = useDisconnect();
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<div className="flex text-center items-center max-w-md bg-neutral-700 p-10 rounded-md shadow-md justify-center flex-col gap-2">
				<h1 className="text-2xl font-bold">Vanilla rainbow connector</h1>
				<p className="text-sm text-neutral-400">
					You can connect with any social media accounts or email by clicking on
					connect button below
				</p>
				{!isConnected ? (
					<button
						onClick={() => connect({ connector: connectors[0] })}
						className="bg-[#6452f6] rounded-full mt-4 text-white py-2 px-10"
					>
						Connect
					</button>
				) : (
					<div className="flex flex-col items-center justify-center">
						<p className="text-sm text-neutral-200 border-t pt-4 mt-4 border-neutral-600 text-center">
							Connected with {address}
						</p>
						<button
							onClick={() => disconnect()}
							className="bg-red-500 rounded-full mt-4 text-white py-2 px-10"
						>
							Disconnect
						</button>
					</div>
				)}
			</div>
		</main>
	);
}
